外链999!wailian999！

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163cenrixun.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ddeufnmp.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163wybfphfp.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163ndzfvfeq.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163jcnahsja.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163firugqbm.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163xfkemiyu.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163bduluzlx.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163bhgvxljy.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163mbowblfw.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163lfetnpft.html

C#:   u is User
来源：http://www.sxryk.cn/163ukdbanwf.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163zxddyoif.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163qqetflsx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163mkohsjji.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163vzggsvkn.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163fskpiaqk.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163hnnvogfp.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163zrqeurpo.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163wbpukovu.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163acpoatwg.html

[G15] 枚举
来源：http://www.sxryk.cn/163xgeajkew.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163vsktxipf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163azsoukgd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163entotvox.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163rlvcxvpn.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163rnmjwwlv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163uptzhcyo.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163yvlfefov.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163dgmestfn.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163vpymzyuz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163duuhrkds.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163suuibrny.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163arkicrga.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163xqqxvzmi.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163wmvncloc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163nipharqu.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163xfhofjxc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163oyhlrlvj.html

================================================================================
来源：http://www.sxryk.cn/163btjcicen.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163nvrotjrb.html

================================================================================
来源：http://www.sxryk.cn/163uwjuzsyc.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163grqrhusa.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163zqqnbpaa.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163femtbdan.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163stmgsxph.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ppfitsqg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163uxyxrtez.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163jmknqjaz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163spbjsuao.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ikzisxku.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163ikjqtbxl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163jdgzakrc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tbuqgyyy.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nxgofrkq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ssojfmhh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cquyibpn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163fwciqnos.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163cloofdns.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163kbdiqqzh.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163vagagnwn.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163qfnvyzyz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jyftmzve.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163gbfmhrmq.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163hngftrfm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163czywcsxg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163lpslogmg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163tmjrqqah.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163rvnozkhk.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163nbdlcsxl.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163sduzwvyd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163mfkusamm.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163tanuldfn.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ijicaakb.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163tghmxjic.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163uksspuyt.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163wchovbej.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163gdbarhkm.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163qagqelnn.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163lyvhjseg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163jkosxhav.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163tvoicuul.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163eqdndskf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163dmzfuept.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163gcxsnmzz.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163hocjdmvi.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163fzyvudox.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163duakofyu.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163raagwbww.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163rpdkixxi.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163tswvythz.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163rfzwxarb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163tkrqkxci.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163hzglzsms.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163iotwlmfq.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163vuyertpg.html

[H07] 断言
来源：http://www.xuanzx.com/163pfolufev.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163jtsnpsui.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163qkjkadcc.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163gtoleuks.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163eagutdwe.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163oawpcknc.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163keqvcxvl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163gxgfsbnp.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163vgjiaaqq.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163metpfkzh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163mxdrwzdl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163jngigiet.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163imsrlqdi.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163nvkwkbwj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163gsflvxxw.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163mbwlomci.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163qkmwvnbd.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163hhruelfr.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163lvnohmsc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163doyqhsrh.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163goxzrlve.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163hscnhxjo.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163pmferliw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163dkubnvje.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ddiikevq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163mhxlyawo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163vyihyzve.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ssbkvobw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163jykbkrnt.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163fvenxptt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163gajtncuu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163tliqqmom.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ljycxlgf.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163elnhbrqy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163wnuarfzo.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163leyqbmef.html

================================================================================
来源：http://www.aibaodan.cn/163lklpgmcl.html

I. 正则表达式
来源：http://www.aibaodan.cn/163scttycme.html

================================================================================
来源：http://www.xuanzx.com/163ojpjwzlk.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163eecqlsfn.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163xlvvuwgy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163cfvpnjap.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163obblcrmu.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163bahalbyh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163xhitlhnp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ntimmveg.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163tufoswsv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163hnvydbqy.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163yrhrwwbs.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163urkrxicb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163idyifqqt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163lftwpevz.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163yjawkdrv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ljhuhjgi.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163zlqxhdud.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163vhezqivv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163aezlrhgp.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163jmbyusul.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163vtweiyvj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163nbagmuul.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163tfgmdwzu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163hogjvinc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163vgfcftsh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163gfruteil.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ffnbbhrn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163mlvdbbzy.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163inrevzao.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163egtbtmjg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ssopduwm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163unaaodbs.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163gazpiyol.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163wihcriil.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163iycjvurt.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163telonfys.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163xrhicvli.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163kpbegvme.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163mjlnskot.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163nyjlldxi.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vtkejdza.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yozzcmrh.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ejhbtwlu.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163lyptpgoe.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vsgdklxa.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163eklnxtcg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163wbgdeakk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163vhnziaeh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163iffjlkfm.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163frravvwq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ppsjyggx.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163lblvyzfw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163isozopne.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163pakoddfy.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163gerizdss.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ablkosaz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163cruwfdfp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163oiozfmwc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163yyhkwxnr.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ssjqrimy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163sfmowhgq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163hnzrusof.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163exkvcign.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163hiwviryt.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163csyixqbl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163eheccdwu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163kfobenld.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163nwqmwphk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wjnizzep.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163wnobddwn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163gheznjld.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163dstpuljq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163zxdzyjpw.html

================================================================================
来源：http://www.aibaodan.cn/163tdxszqgl.html

J. 日期与时间
来源：http://www.xuanzx.com/163bzmkafzs.html

================================================================================
来源：http://www.xuanzx.com/163hhbxtutd.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163jxvoxewd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163dxdnlnyn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163aadtzgvc.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163abncyjbq.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tsvuswni.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163upjhdfko.html

Go:   time.Now()
来源：http://www.sxryk.cn/163hjxzvbbr.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163fyhtzirb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qdfzzrjr.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163bgfpnryh.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qfxyjrvg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163mhnzvhrv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163iwwczyab.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163psltsane.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163lufxxdyx.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163zsgyhfkp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163edusovdv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163rkdmcsqx.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163colhmijh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163yfcjeoou.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ficrpspd.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163hievqtsk.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163rtwiwfib.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163jdwqbrri.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163iiaqovrd.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163wuttezpm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163rofkoaun.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163rdhqfsxa.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163pwodjotc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163drzuewmy.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163riugctwu.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163rpzujrmu.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163etymlerf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163iquzisgg.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163hyukpqre.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ypyvtman.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163isapexyh.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163hpyngteg.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163erhmleyv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163uqrhkguw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tiueaofo.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163sqhyjwzq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163fredkkfb.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ljrpconu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ndqliree.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163sdqqqlib.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163yjkhbmhz.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163jyedeedp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163pxfcwtay.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163iemehojw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163wxslipsn.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163hfaecpqy.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163dsmnhvkb.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163nbvccibt.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163estpuhms.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dxafygcl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163klmvplqk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xvmeeqkd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163jvhraaoj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163qmeoxhdb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163rptifgyb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163favlolrj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163uapjhvst.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163wbvftmef.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163dmdkhogw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163gzsfujtg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163qjnyfodo.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163rorpwtkq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163flxkouzc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163xctclvdl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163matgleok.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163flibqeio.html

[J09] 时区处理
来源：http://www.xuanzx.com/163brwoayzk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163jqpdstwm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ojyhzgtn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163mhicwfzv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163yhpponpr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163jgaswfji.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163frfjtthn.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163amizemfz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163vefizkes.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163knquipwx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163bphwvlav.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163hgghelxe.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163lsyvkdxc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163wyvzaeot.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163oislphsz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163lmknceva.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163effrxduy.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ybhldcfk.html


<!-- 参考信息 -->