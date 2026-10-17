外链999!wailian999！

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163dkmtmtsa.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163wnrkxfga.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163agpstina.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163scemonss.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163lsjzybkh.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163crouosnx.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163kvsrouva.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163nakjkbml.html

Java: u instanceof User
来源：http://www.xuanzx.com/163sgmydady.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163bqoidgkb.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163elgbigtx.html

C#:   u is User
来源：http://www.xuanzx.com/163mbtanfgm.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163fxjhhoop.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163comliivy.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ssgiizzk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ltmzocse.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163rbzwhcoz.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163qifswmbw.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163eywljcpl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163eueaotpf.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163dmawnejs.html

[G15] 枚举
来源：http://www.aibaodan.cn/163xfbatpmo.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163pdtkadfh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163twkfeiyw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163svagluqz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163fepflyky.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163iikndtaa.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163qcmienpn.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163drbabpxm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163wespskzg.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163rzmqclmt.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ryyykoyn.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163wjqvqybq.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163mgrjttfi.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163yfphkbat.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163bcjwwzcy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163lsdopubn.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163squajtly.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163whrhbown.html

================================================================================
来源：http://www.xuanzx.com/163bfvdzjhd.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163hbdbcjsa.html

================================================================================
来源：http://www.xuanzx.com/163cotljzgb.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163zrxucyls.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163cckspbci.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163nijmjoza.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163kttsqsvl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163pqkqhqfn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163xvnpyiwk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163yopwjmxz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163xbdtyucm.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163dbuadwul.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163bcunlgqa.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163uiiebtnu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uobyqevk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mxuyudmy.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fjbgxjmc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vizbqmob.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163epdugyyl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163mztufprr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163gsytwtkz.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163gsndujej.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163tddhqysx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163mwbwljtz.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163uyyaoyes.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163dmsazjhd.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163orqofiyc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163cyanqqdb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163kgoymdyp.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163peozfadl.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163mknhhdxx.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163gpieesls.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163qnwjfkuu.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163esakgomn.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rgogjhyt.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163gankyidv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163tetsxyjv.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163hjqcvimr.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163yckcfivk.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163vvbskvka.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163iocveabe.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163kpgtrtqe.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163edjnjkgg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163dsyrpksa.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163rjifjmld.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163eyaytdjj.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163spjxluft.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163rtdleodf.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163dsdsehit.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163xjgxauxa.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163zjenjhzx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163nvtkikvb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163xgtnsxjb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ahfnavcx.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163lrbjgzle.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163grwgrrju.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163mewwevbj.html

[H07] 断言
来源：http://www.sxryk.cn/163dbbvixez.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163enjugdum.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163efonrirf.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163vtxeamlf.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163psbxbbes.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163wuplbcru.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163eeygbdbu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163rcvzsqnn.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163ktquecmu.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163vzamxpnh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163oyqpafug.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163tpbyeclc.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ywdtefxq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163qykmiuil.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163myezrpbj.html

Go:   err.Error()
来源：http://www.xuanzx.com/163jxcbcfzn.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163djrsvcba.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163frehwlox.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163jvfzjduw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163vguljpju.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163sontczpi.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163apzrtqbd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163znvlikgx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163wpiqrjqg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163jfldrzuh.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ysavunii.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163krqscvwc.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163xkfrcjeg.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163rphzxjmp.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163nyinrkwx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163rjuwfuhh.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163lvdfmoxe.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163lnjtxhbq.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163niwxymgk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163skgqyuwm.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163dkrorfwn.html

================================================================================
来源：http://www.xuanzx.com/163phjrhocz.html

I. 正则表达式
来源：http://www.xuanzx.com/163oocnyjsj.html

================================================================================
来源：http://www.aibaodan.cn/163kbkoprpv.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163epsogsjt.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163frdnrewh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163maonkaes.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163osyvsiir.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163znjtbiws.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ilvvhbkx.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163tqyfskbv.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163sosmyqny.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163bpvvdfhh.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163cczomvdo.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163xdppkhwu.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163pkhplpns.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163wfbcghyi.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163vvyjyuob.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163qytcvmqe.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163jeuwqyds.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163crcdmrsx.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163gjmlyfxr.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163apcpeodk.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163jvwchooa.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163nmtfsmib.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163dbkyjyep.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163blqhfsra.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163rwnklkzl.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ryavcdfg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163nouctjay.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163khcrqtpr.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163vgwjiiwl.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163reyrvuib.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163arcoisba.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163allzrliz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163cjhiipli.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163pdldcznu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163pqvndcee.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163xuklzsim.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163amzkhaiu.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163rilgmquh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163zhstmcnq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163syvqowiv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hsvnzvru.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vtwcwrxi.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163huxpnddv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ymdsvxdx.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bxzflxou.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163bgmdtgxb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163gsojozkf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ouemghxm.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163mpqisyxs.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163dppctxqf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163fiiclods.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163kdupzuyb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163gyhmauon.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163bvsnlims.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163isczgoxq.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163pjljdjjt.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ffojleai.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163pogduphx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163xzobwcli.html

TS:   /error/gim
来源：http://www.xuanzx.com/163tbivolcu.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163mznjpgxu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163kmjlitnw.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163fkdlrjyd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163rzwwaxmv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163pojwdnaw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163atstbeva.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163qlxsheby.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163sikhxqem.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mawsdizb.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163qwcfesxk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163eyapuwbe.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163rxxdknya.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163jwdxxfse.html

================================================================================
来源：http://www.aibaodan.cn/163ombsridz.html

J. 日期与时间
来源：http://www.sxryk.cn/163vkroudkh.html

================================================================================
来源：http://www.aibaodan.cn/163vczrwthr.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163dttzmptl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163kbsbtsph.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163cjxglgbb.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qnqujndr.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163kuavhofy.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163gvuybrpf.html

Go:   time.Now()
来源：http://www.sxryk.cn/163zaonhmwz.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163cvgplngs.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163hpsdcpuy.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163jlivdbgq.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163kozrzrtf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163yjmqmfgn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163gtncyxqu.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163nmbxxvah.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163udvebsly.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163oksnncni.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163tcdkatuj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163cdhycjjy.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163novrvhkn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163gfyxlysr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163lzgddvfa.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163sqkdqbao.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163nciiymqb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163fvwzhapr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163bbxbpfqj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163qskuwykz.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163wlxjhhej.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163nouxxgbl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163dvbwdvxc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163jesheatm.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163kuyqffwv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163yyhhnzzi.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163esbxisxz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163fdnsfkdi.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ntwolpva.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ntuagmrq.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163hrmbzuac.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163lhijvtwi.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163cjngoqkt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163aeqjnvof.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163vjhjubxc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163pcjmeqnz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163piizueso.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163kztyummt.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163xcnhdajr.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163hmserxip.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163yestgedm.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163getqtowm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163vkkanyyu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163mcjlwqkc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163lyeykltj.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163nknevvbk.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163umdnmwkw.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163rkyhqrdr.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163xjuznsqc.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vssecknz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163utlxieuj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xtgsbguy.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163xihigdtb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163imicvlqm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163zobmqooa.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vvoqnewz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163clcvfqpc.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163hheiijgl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ydfutykq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163lzyazsmn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163zgreeiye.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163pwatzfbv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163kgmqmqnv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163orvsuayw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ecmtjblr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163kcyuzsbo.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ijvtplhn.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163fcgjfyja.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163qmnmvaoo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163lvtskfys.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163vfhalulv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163odfwhaul.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ixwszhga.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163tklhhjic.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163kewatadq.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163xgbpslyj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163jiefafiw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ojrmquqy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163fhbrklre.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163gwpkmrzo.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163csllbndz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163zhtnxukk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163nghqqatc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163etyvmmrq.html


<!-- 参考信息 -->