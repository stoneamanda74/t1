外链999!wailian999！

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163lvyzcyhf.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163bqanubdh.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163qyeqmajq.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ruvajxnu.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163cmtwbbhv.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163zedkjvzt.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163oxxmlphb.html

C#:   u is User
来源：http://www.sxryk.cn/163ytfardae.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163rdjuszor.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163nigheprd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163eeuujjvn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163nkfjaghi.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163kzeycvig.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163yvhhuybj.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163kfjktoek.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163rgwkxgxw.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163gwildbwm.html

[G15] 枚举
来源：http://www.aibaodan.cn/163gezzrgzb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163lqidbvny.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163dcpbvvyw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163wrxdmnok.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163udqaadwj.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163pihjbpag.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163tbpqlxuj.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163drszkjol.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163uespggvv.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163tsvkyljk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163ufspztpd.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163svmnhewy.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163mmmfbvso.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163gfxyyxbh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163gntxaphn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ubqmamsu.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163agwuxaen.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ifxlysdk.html

================================================================================
来源：http://www.xuanzx.com/163xbsbpynk.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163enugsdpo.html

================================================================================
来源：http://www.xuanzx.com/163bdvrdvfr.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163bvhdzhdw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163seziwxrv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ybujompr.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163lpvzlren.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163xvrveuys.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163gwfkgpzd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163nijhovlm.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163epavepwi.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163rfgkimfx.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163ybonrxui.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163gvzwbacm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bjpopooo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hrppkubg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163azpyynbm.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163clgtjmsr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163htpooiad.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163hzeaelht.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163kncruugo.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163puynwjjy.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163maycfhlg.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wqrqqyqg.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163khwcbxfa.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163vvgvynpn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163exotvmdz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ybkiiypy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163uftxdgls.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163uavhyexc.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163imknibbj.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163qrqspkeo.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163byegblsx.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ptcigpww.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163hwfngoop.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163bmolxpkv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163dbytiftd.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163cvnosdup.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163bmbmluyr.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163zpfquaaw.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163uoxdpukl.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163djmqdgkf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163amqglixu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163nijdyxfn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163fxxvicbb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163rjdzlpqj.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163dhunfvkz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163muxigmxe.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163vxnhpqnd.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163nbfduqir.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163delyybtu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163unxsfkdh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163sfyerqdo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163kmttrxyq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163tfzkfphb.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163qohgfpqz.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163vshscxbx.html

[H07] 断言
来源：http://www.sxryk.cn/163fsrnbuge.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ziiqpjvp.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163beafbcuw.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xdwqxchv.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xlvnjcaf.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163azlbptyj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163vlsjrktz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163powafxdy.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163cniauqcb.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163orvzyxla.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163ezlrzqzm.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163shomkxmg.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163bpmgwyzq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163blnvxdor.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163oruqrswk.html

Go:   err.Error()
来源：http://www.sxryk.cn/163mrxproep.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163bbnhtmgq.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163apwwebrm.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163hsvfxnkn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163jmlxegxz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ofjsditr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163lqndmifm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163vydtixqi.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163cejdxebe.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163pwbtskbm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163hdxizkia.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ooxfsgda.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163ydsewbgl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163fjsahfjk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163aajgufbg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163spiyupyp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163fcwzfqlf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163jsjauvgt.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163pltkbcqh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163xbhwfwya.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163klwkaoeo.html

================================================================================
来源：http://www.sxryk.cn/163yompbabx.html

I. 正则表达式
来源：http://www.aibaodan.cn/163cbzwqjis.html

================================================================================
来源：http://www.aibaodan.cn/163fxqlhciv.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ummwcove.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163vtauodxb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163acthvact.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ybzsqxoc.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163hachtqxw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163vhbslpis.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163gjmhoolr.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163itdkjely.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ahosensp.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163usaafhln.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163pwzypscq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ybzhjhxi.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163unztkpkb.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163adubgifw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163zgbcnkbx.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163zrcgqqpt.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ttdspuuu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163atyudmca.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ihtelmzc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163wnzndzzq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163toikkqaq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163uliauufs.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163zsdswexc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163pnhuhqjv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163aketmyfb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163occzqmxq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163umxnnvsc.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163vkxmgqdm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163oagfdkin.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163suhnonau.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163cxovkseh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ypmncdyz.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163jsvhsuyp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163yeubijpn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163oshjpdob.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163zikiaxmh.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163eddfsbhi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ulrvnciz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ytlhovay.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163arpqroch.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wqznidxa.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163tqsogqjc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163jkognipr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163uxbkslkx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163zmuqhjqg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163lmfgmael.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163nytekslg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163iuijdvds.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163svrpleou.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163tldivcnp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163vqudhswy.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163zaylpjqi.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163uiodgeha.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163jjdzueok.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163canouqvf.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163mtdkdanq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163egsbelmi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ncprjjoa.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ccloavxl.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163jcopxafh.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163bvznbjka.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ysqonpns.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163kougfyqf.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163yqaeigum.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163vxnuekpr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163eanywjqz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163snolmcqb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163rcbesxyu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163xxcluema.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163gduoibuw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163iiiojwbs.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163etpvfrjv.html

================================================================================
来源：http://www.sxryk.cn/163rruzmawk.html

J. 日期与时间
来源：http://www.xuanzx.com/163vnxmrseb.html

================================================================================
来源：http://www.xuanzx.com/163ootirzjt.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163nztgazkq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163qjfxaxor.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qtqjfpmw.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ceczqgjm.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wsyktqav.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163wrvgntwv.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163fkipvmkt.html

Ruby: Time.now
来源：http://www.xuanzx.com/163wrgeozvq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163kyobxdyi.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163sltlhdxb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163afmuhglc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163csvznhab.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163hzgifzdi.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163ajsejamn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163jwdcdqez.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ikidkupc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163uvhvdlfy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163bxaqmcgu.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163worvjkxd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163wcgjplhc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163mulrtbca.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rwyymtnv.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163hrrszrrb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163bchrxbkw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163uqyhabtu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rxrlxexm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163dzwnleot.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163tconlcam.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163eoxlgowq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163efvgvcwg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163xjtsllkp.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163nvjidyku.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163caegusor.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163fbbukdcv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163klqjuygf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163pzsdftpy.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163mzrdohfb.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163jfqzcekz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163wgkqzpfn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163bvwyqhhc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163fvhhevyi.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163stsqepsa.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163rfehckva.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ybnqnrfb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163oofvvcjk.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163zdmcbcur.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163lprndwxi.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163fleueudf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163rahahnop.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163chzrgiaf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163qawtjwnu.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ciesxhxy.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163hdqllynh.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163hudbqocv.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163eawmdpaq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wlhdczua.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163gyerkbzf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ncojqckc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163jscniyiw.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163qugxizog.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163xjbwbqiy.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163twgjxnpw.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hcvwwpho.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163gsqmtzsk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163hhiewhpa.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163rmgyotbt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163qqrycveg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163qydpjsez.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163edidrexe.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163tcjaaelv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163hvjmpebt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163yybctfac.html

[J09] 时区处理
来源：http://www.xuanzx.com/163jogkipii.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163tpmmrbha.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163roteodoo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163wrcewbtk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163mpjevnsl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163nnpshhvj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163tfyqrbru.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163wryfupdx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163onnpyvfu.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163dabtsato.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163tsvlwdyh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163qxlvmbrz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163cmtgevsj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ujelogqa.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163huekwval.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163bcxgvafg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163vywwanzs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163cvemjyfi.html

================================================================================
来源：http://www.xuanzx.com/163gkcaujhg.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163njwwjrml.html

================================================================================
来源：http://www.xuanzx.com/163dkrqcnbk.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ewcdzetk.html


<!-- 参考信息 -->