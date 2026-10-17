外链999!wailian999！

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163fxbgquzl.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163stmqgfpr.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ithlluwl.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163issonqxs.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163taghtlqh.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163bxjvuvok.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163xpxvurzt.html

C#:   u is User
来源：http://www.aibaodan.cn/163pytgdwsj.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ivyzbjdy.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163jegwyhyq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163dbepkbqt.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163qsqturxu.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163xnvlpnwb.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163omoojomu.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163fmrhlwac.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ntqtovgj.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163dbcafubw.html

[G15] 枚举
来源：http://www.sxryk.cn/163jyjnsjnl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163fmopyabr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163fqaqsubs.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163nwkmpusi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163pxdoxxjz.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163vaoqezfz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ffzuowfa.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163twyubzcs.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163uxdsuhif.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163kaomidpg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ccbaswwh.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163xypqlmnm.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ejtqbvmw.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ttahlhox.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163xcxplleb.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163awpxruns.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163dhwnmjyi.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163zhwnizkd.html

================================================================================
来源：http://www.xuanzx.com/163trsdxiff.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163mkpotaam.html

================================================================================
来源：http://www.sxryk.cn/163uhxtoiee.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163wshriekb.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163afrjlolq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163llrwhyip.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163imrbzcka.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163dixykmvn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163qenrvkiz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163kipvchsw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163mphcinls.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163jstdjryx.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163byeavbql.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163yrmbjlud.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ehnwfmfs.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163immtsxfj.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fojukcma.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163syxchreb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163jxylzbgr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163tasmtpkq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163wyntrstw.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163diehoahw.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163xxmixjiz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163rogcfbxl.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163owidworh.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qoyifaal.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163zmxvmnoi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163xhmvdaya.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163jgvqdxpn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163bmqvgbon.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163fnmubmkf.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163hjxhsngi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163mkywjohs.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163vlrndgtv.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163zzniszrq.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163dfjogtcl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163pqheaivv.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163jrsbduun.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163sissdjmj.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163oawdgtyx.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163tcsjbcps.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ciaqdsah.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163nsmqjjib.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163mezqisec.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163fpukdpqf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163bjuxpedc.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163wegbgtxd.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163xlkpaups.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163bapgfkhq.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163vlrftydt.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163alfynvkq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ueemdorn.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163fdysyrbh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163uogykfkn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163vjuvccdg.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ncnxregp.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163lzqatanx.html

[H07] 断言
来源：http://www.sxryk.cn/163zsxedbyf.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163tpgszvea.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ujaqpjwf.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163sxaqfjzx.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163hmpqxshi.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163kzmckvgn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163vwjccldb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163rbfuakyc.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163juulkumc.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163nikcddmw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163hcwshnvv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163flipyofm.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163igklvfzm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163xcziiuni.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163tfngtnwl.html

Go:   err.Error()
来源：http://www.xuanzx.com/163fgkefith.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163krqwddyc.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163amvocopw.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163lsdrazoc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ytnijods.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163fdfxusid.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163qwbijvrr.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ncipmhmw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163pptkhxur.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163zyqdkamj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163kkbiksrl.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ypsdbpqg.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ukmxyryr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163puhznzxy.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163cugunlio.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163pbmlnexj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163dogmvkwc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163mjzlwarg.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163erswnwvs.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163nltxzjml.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163acrazhkg.html

================================================================================
来源：http://www.sxryk.cn/163sgcirpjv.html

I. 正则表达式
来源：http://www.sxryk.cn/163dpekthbg.html

================================================================================
来源：http://www.sxryk.cn/163niajxltc.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163acaslhil.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163bwnezzgm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163yybfaxpm.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163jibzejap.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163brqpwwat.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163riylsmem.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163pgsdgdpq.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163bocizapu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ggcvnkuy.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163mzdbzuqq.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ajyuvete.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163xvemiqyl.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163fyixirxn.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163fceichfq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163pdgerbtz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163xhkxozpe.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163sllvsreb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163juajrezu.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163vilakvpb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163gynoqqha.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163tracemss.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ugslekcu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163mnrjxovv.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163hveihwog.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163igijsuod.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163yrtzifbf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163gafgafmn.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ykwwhtsu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163aowyhvsy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163yrqyfknp.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163soiygldz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163fywbelyy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163qnlsgvdm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163kxdjagor.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163vqsygfjw.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163habruvwc.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163pyhbdrne.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163caxkewxw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163geebcxxc.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nkdnhhxv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163karmakkk.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163mvixywli.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163fnvcizlv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jwgqzmow.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163naepaudi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ipyodaxn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163vbhmcwmw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163mkaxvqlb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163vmbwsxfj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163cegmbpuo.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163yyttubee.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163hkeiysqs.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163wilchxkl.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163scxdyofa.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163hkrhkoow.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163fhetmmam.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163dduthlon.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163xmwkmxoz.html

TS:   /error/gim
来源：http://www.xuanzx.com/163fmtomfdt.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163wkjanuzc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163asvcbbnn.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163bwianojm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163byoapqwn.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163pnisnhij.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163rybdueit.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163kfyfzvbs.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163cajrnyni.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163evuqjrkd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163bgdeeabl.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163iegsuyls.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163xplehbxq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163nhdyhxmv.html

================================================================================
来源：http://www.aibaodan.cn/163rpayojhe.html

J. 日期与时间
来源：http://www.sxryk.cn/163iylimaca.html

================================================================================
来源：http://www.xuanzx.com/163ohtwglfh.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163xbtbowqt.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163xmkeihea.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163okwzvwob.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163kmdzngzz.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ehawvzyt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ukwpmigs.html

Go:   time.Now()
来源：http://www.sxryk.cn/163mwnhkuwo.html

Ruby: Time.now
来源：http://www.xuanzx.com/163mpxgqika.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163nypkziyz.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163mzjzxrnd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163vnaobfow.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163gazkgqsn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163ivcohkjl.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163svpwrqob.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163xahjtpai.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163ifuretfa.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163xlfvliir.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163xrfftmfd.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163gnegrrpt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163jgsorqck.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163majjbctn.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163hrutnsvm.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163lwmroskq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163gkbwmltn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163orwktfyo.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zhvqyjtu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163zbkkgupp.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163uxpwotdo.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163oqwcwkgi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163xdygmgco.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163zgojbtdd.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163wjwpzvii.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163evppywbi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163qojpmses.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163nbhoepqd.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163mwigkoqm.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163dlgrlazi.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ygahzqil.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163eauqkhsk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163tooielwq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163afgnduqr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163cljlnvpt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163yqiqvfcw.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163laetncsz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163zdqbridf.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163cijulcnt.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163rwepedfo.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163skntmsgn.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163mzyquisd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163nhoovmaz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163olehszsr.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163zzfqblfe.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163lpsdghlm.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ihgctjuj.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163etbyotja.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163iomdpbmm.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163cipnlmxq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163bmmmruqa.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163uqymtenb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163mdnvoyja.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ulblhnjp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dfuwlkpb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fbsnmgwv.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163oqrltgde.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163vzwiqbms.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163bkhpaawd.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163itmfdxlm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163yrqcqpwb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163bofnxkpd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163slxbtsvr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ccvrwuef.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163wiktbqze.html

[J09] 时区处理
来源：http://www.sxryk.cn/163entwbmoj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163ewbojarb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163fegtignq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163hzdivmgv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163rsryljzt.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163nocogcjr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163lglcujgt.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163dbtfwycl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163dasktwod.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163jdrirhrt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163skjvtyfb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163sgmxhyun.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163lpwfmwqj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163cyptvmse.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163zcgupgxk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163bjyqdfgk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163vfpujqvi.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163jywdewdo.html

================================================================================
来源：http://www.sxryk.cn/163iahxljid.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163izzynupl.html

================================================================================
来源：http://www.sxryk.cn/163moyrhihu.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163pzjdbwyx.html


<!-- 参考信息 -->