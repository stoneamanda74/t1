外链999!wailian999！

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163adrjynnz.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ledaahrx.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163xhihwsvj.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163cblpmgbm.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163yhyyjyiw.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163khkdkupx.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163gqchsjiw.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163sajpdbsk.html

Java: u instanceof User
来源：http://www.sxryk.cn/163txvjvtcv.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163qlzteysb.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163cqejbxhk.html

C#:   u is User
来源：http://www.sxryk.cn/163wabeztjl.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163puppyimc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163hgdbgjne.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163wkznfgeb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163vkphhiov.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163lrhyuxlg.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163bqyfveuh.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163kektcauz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163oavunzpo.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163nzcqdvlf.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ftoxsuuh.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163hcvkjvml.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163sjkcalry.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163jbxixyqt.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xmuhbybg.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163jdokupsz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163lgbbxzik.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163rljypgdo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163gvezweem.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163yqpavmwk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163yuophftm.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163qsudibjw.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qwwdzmei.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163twygvjbi.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163wmytznkw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163thegekuh.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ukqqbrlh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163mclczrwa.html

================================================================================
来源：http://www.sxryk.cn/163wvmgoeps.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163wapyqjoq.html

================================================================================
来源：http://www.xuanzx.com/163voydmmbu.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163xznogrtp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163hexsrqpt.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163rqtzwtxn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ryjlcppx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163qzykvihk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163fucuowri.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163hkouhbwt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163vqizprak.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163exadrecn.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163mckiwvgi.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163zjoqmflm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pxilkeme.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pehmosot.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163toriytge.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xnnxzidu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163zpbaxlnd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163bhgfmpqb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163vjisjsnb.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ptanycnl.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163hfwycmxs.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163hspftmfw.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163zrqiwouc.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163rgvuxcos.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163kleiwxgi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163gsoulbbe.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163jmkotkmk.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163yyeiqryb.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163eogmybnk.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163jrwarqsv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163aoieuppy.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163vkmhbfia.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163krabhixt.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ynzzaqsm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163xcecruay.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163bijhsryh.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163pbvrbzfw.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163rjalhgyi.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163kkxuixqr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163hqgawrki.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ojujnguy.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wncplpnd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163jvynymkf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163sjnhbknl.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163yxhzhpco.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ngmkwgbz.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163jbbwtxmx.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163nfedrutr.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163vtnlhzay.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163bjtsgkfe.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163agogddgg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163rbqcqnar.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163nknfrmwa.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163wadzlwzb.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163huxyjwqx.html

[H07] 断言
来源：http://www.aibaodan.cn/163krpkhjda.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163wblishwz.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ltaqgyld.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ltkngjes.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163czerskfl.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163wweatkae.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163onmhypyo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163gnuftyrs.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163kyllxawc.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163dvcrxhrn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163xrdbeodc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163bauuxyob.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163pewbvvky.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163nkqnwpoo.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163qycblhoj.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163czgppatm.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ppvwdjnp.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163gogsmenl.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163jfapvuaf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163oqkxlfjt.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ntrlwmum.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163iqcpjdyc.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163dqdnnetb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163xpvpjsuq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163cewvgjcw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163arkgqsqu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163crenafak.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163fjpvehaw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163chhyczkx.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163imcrhegy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rkbsdhsa.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163lcblyhgh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ppkstnmt.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163omrwwbpy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163hcotnrsb.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ijurptqs.html

================================================================================
来源：http://www.xuanzx.com/163hvdwbmnn.html

I. 正则表达式
来源：http://www.xuanzx.com/163engqydkv.html

================================================================================
来源：http://www.xuanzx.com/163juadvviz.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163dwxgigoc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163qmycsipp.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163rhjvzrew.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163qhlggbhv.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163dofhapfz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163bmymavuo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ryvaddre.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163puobngtd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163dsnynwel.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163cpmpbrjo.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163poomnqdx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163lxnoxcvz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163cgxkfwrf.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163irthfcpc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163pildidpd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163yabcxgax.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ldwazqxn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163egqktzxs.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163kdubqxdj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163poftfigx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163wmhlicto.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163yuhoxnod.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163cikkveem.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163sohcfcog.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163hhjvjage.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163snhlriih.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163vjtxcojk.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163dcrbfmqs.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163vffztvoq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163mnryghkr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163icdniysj.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163cudqonpa.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163gfocrikw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163tzjkqyzb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163mzolwfum.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163kiewkbzn.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163rkqwjnyl.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163hfwxmyiu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163nnhppoty.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163webnvaci.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xhawohmo.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163jhdouvgi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163qjyvpnbd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ttfedmyg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163wwjwvisk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163lhukwlja.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163dlzgbipe.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163hctevauy.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163lvdcqwpv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163drtnkiye.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163aaesxezt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163zzogtmhf.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ipfpridd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163bavyvnrp.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163gzcmlqxg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163muioymew.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163dqmccgck.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ebxwdltk.html

TS:   /error/gim
来源：http://www.xuanzx.com/163hcrdqkfp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163atjdurtm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163sdogwvan.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163liazawyx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163yvddtuqs.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163gcioozqk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163zkakgurw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163lznrefdg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xmtegrrk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163tfcofbrh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163yfwfrmsd.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163uoisisji.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ksrshbgr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163zitqgfbb.html

================================================================================
来源：http://www.sxryk.cn/163dgpbsowc.html

J. 日期与时间
来源：http://www.sxryk.cn/163gfjydmog.html

================================================================================
来源：http://www.aibaodan.cn/163qkaafpca.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163prddyxmw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163otagijmw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163uybbanlj.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163wizjibrl.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163iyobtygh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163oaoztwdq.html

Go:   time.Now()
来源：http://www.xuanzx.com/163blhwiinn.html

Ruby: Time.now
来源：http://www.sxryk.cn/163bmdfukrv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163oxghpdns.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163sbdiduwn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163njniodym.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163zzufalou.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ishkxkdt.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163mgowyhkw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163zuzhccen.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163dbatmshz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163tmskydfa.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163pickviim.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163fdwumuyu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163pmvsttyk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163mexmlszc.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163bgcoinqf.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ekpbdrgp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163dzljemuj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163tjllqsbj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163geaiwdeg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163gczciove.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163qgbxekjn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163rpjvudne.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163qptsirhd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163fdslfaaw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163mamxfaid.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163jsjgalkd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163vmerqqqu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163lirlkcka.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163mhloecjh.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163fpxklulu.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163lxlcmiex.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163wacvyhoq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163evxcstmn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jxaduebp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163jlfrdqhu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163rgtikrgg.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163lgcmawlc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163osagohkc.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163zgfkswwv.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163prslglgk.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163iyozqlgp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163dprsbnvb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163kduxhthq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ixqljnva.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163efqfcbog.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163cqpjqbax.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163qutlrlsg.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163elogzgvq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ifjydbvf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163domjsuks.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163yacbfbsd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163uplvsmwg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163girobowp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163uiikfdom.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zgzuwxfj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wcwopcgz.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163hpetgepg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163qqxdlvol.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163pzmwxjjt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163osrqxgxn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163hqkafqqj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163kjixbhbd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163pgrzwxuz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163bzhmvcqf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163rbyiulxq.html

[J09] 时区处理
来源：http://www.xuanzx.com/163dpxoqlmc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163wlonhfbl.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163xnrffpas.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xsnncpsk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163jzjgztbg.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163tvwfyxxa.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163jsgawtga.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163jctcndaq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163mkqahmtt.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163qxrqwhqt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163pwgmlwox.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163bmfvxhor.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163akqkcbmj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163mfnnrviv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163joqktsht.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163lpvgfdng.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163ilkfezmc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163qiofyztw.html


<!-- 参考信息 -->