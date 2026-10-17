外链999!wailian999！

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163hrdhlchb.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163idpkprld.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163yzsupyoh.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163koqyexwp.html

Java: u instanceof User
来源：http://www.sxryk.cn/163lqosbbkd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163rvexhahb.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163fzpfwgyb.html

C#:   u is User
来源：http://www.xuanzx.com/163vvvldbpf.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163rsddxqxk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ogdxzsta.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163ptgbjpro.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ibwjesuq.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163sbhnicom.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163aoztcvdw.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163mcfpywhj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163qbjxksyd.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163mehlnhoc.html

[G15] 枚举
来源：http://www.sxryk.cn/163rghjxmqz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163gttlahgz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163kgpwsswm.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163rngtymjf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163jelplyvr.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163oaekrfmp.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163ylbpbznb.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163awcrpbkm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ubsymlji.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163xuyljtkz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ulxlyavm.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ygtjjryr.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163qxiqyhbr.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163qgpnvats.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163snxilgqs.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163wnwywmgx.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163qmhulwdb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163xlavokwa.html

================================================================================
来源：http://www.xuanzx.com/163iqotnxug.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163nffatfif.html

================================================================================
来源：http://www.aibaodan.cn/163blrefzqu.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163cujczfeg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163uyeixanz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163mfsnkvti.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163hlzitmuk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163bebpgzod.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163dgwoucdl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163yrncsuzw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163zwmyuzah.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163oprgbxjr.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163tsxdooem.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163gnqejkxx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hfyvdern.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163favlezqi.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lkemilux.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uwemtyja.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163cneqzrnu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163tvnofjnf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163bfmjumqe.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163uebinihe.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163vuyfjtoh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163kgwihkip.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163guqkmugb.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ashlttcp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163ypmabtfv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163gbfrvwlw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163caizywcg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163pmmmxzxx.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163qwuyqbpd.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163dleflsdj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ahzwdnat.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wvhnueng.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163vzwiypqd.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163glcrzlpx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163zjibxiex.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163dblexwct.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163dolbpzsn.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ysaocnrw.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163wswlatnk.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163kjqvvhqt.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163dtcjwdeq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163dppswjcz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163nyehoymy.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163rocxngcd.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163xiotpdik.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163cbdyleky.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163pnhzcdbi.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163zewcecey.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163idfvxlve.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163efhmjjzu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163nytijhbr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163yxfkkbmf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163xzzovdus.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163dsruofok.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163illbfmlf.html

[H07] 断言
来源：http://www.aibaodan.cn/163cpoqegad.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163sdgajqps.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163zmwakcdo.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xcqnsvht.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163pwuqlyoq.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163dajhyqdp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163vqkknsrn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163goxwmmbm.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163sdtnhhhw.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163yssdilab.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163fymzxaix.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163jlnicssw.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163dwpsdofl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163zwszcjbr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163zbrlebyw.html

Go:   err.Error()
来源：http://www.sxryk.cn/163qdqllhwx.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163yxbsfaqp.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163jshhhnoq.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163uvesjmbi.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163rwpdscgn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163drbdhlrb.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163rgzvevwd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163pbimrbwl.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163fsvlbgyy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163zissbyja.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163cunerdsj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163utrxzeav.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163bfzqefdc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163bhgouwfr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163jxtdrzul.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163zifnjrwi.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rdrtmpsy.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163fcsizhbi.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163qtoyfqkx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163vnocvrml.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163xuvrlwfx.html

================================================================================
来源：http://www.xuanzx.com/163zbjchilv.html

I. 正则表达式
来源：http://www.aibaodan.cn/163hgesyvkd.html

================================================================================
来源：http://www.xuanzx.com/163cckupoob.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163nbuppgsh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163dmcedmqg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163lkojcgig.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163rlziyfmr.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163qbvnlbcx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163qgyzozxw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163lnaphrtk.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163gxbfmpsv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163eidaromi.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163epauzrnx.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163anfruvrb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163idiuoupa.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163uiueulaw.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ofcszxiw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163yxlbxaxn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163dthwbutf.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163nimbsqoh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ulzgajsf.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163bepgxlma.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163qeqveasv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163xzfrarwv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163dytjlqva.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163grjlpaom.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ftrgpeze.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163jphmxwsv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163rhiwrfbo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163unqrgipx.html

[I04] 正则替换
来源：http://www.xuanzx.com/163vnhzothv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163errpahfh.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163wocjyayl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tesuhezq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163lbgtlacc.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163adtgxlgh.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163tgnxnvtg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163xyvphjzy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163kjawhpal.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163jgzhyaes.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163vhygwwgn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163jnqbetqo.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163oesdtzvv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rgzqiupj.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163rdzhflpv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163nxikenzy.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163onxilsrz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163rpulsqpy.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163iucgjrbg.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163wplgerde.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163mcztjhdx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163vtwrmzuk.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163cugcaozs.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163oxfhayag.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ibkwqnvw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ovwokddw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163uiocqkdk.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163vacdzuxm.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163xzqjasau.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163mhocmgqd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163slyupefv.html

TS:   /error/gim
来源：http://www.sxryk.cn/163imwmbxkf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163jauhounx.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163gueqfvtx.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ezspxpch.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163dugirvbx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163tefpdqmw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163jpvhftqd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163fixqkxdz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163etyxenot.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mnpvfsrr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163qxrwbeuy.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163bwuixaku.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163nwujaigf.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163yrzkajgl.html

================================================================================
来源：http://www.sxryk.cn/163hpceswph.html

J. 日期与时间
来源：http://www.aibaodan.cn/163zfrfvyrm.html

================================================================================
来源：http://www.sxryk.cn/163tthjnard.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163pagllylx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163pnlqxwqg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163uuwokamm.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163xrmhdysk.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163zmghqmig.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163kffgkmos.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ptbnxexd.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ourecdsd.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ckgfliod.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163lidjpwan.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jszhyaou.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163yfikipzu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163gbzgetxp.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163gqypddlj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163flvdomhj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163iuvjaaim.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163dqxkcykf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163vquqlhlt.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ribegnvw.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163cwfqgzcv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163lokxovrk.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163fgxoyxjh.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163lecmhzqn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zrruxwsy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ieitbumi.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163uczovexg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163poimlxgn.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163qwbisydb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163vgockjoe.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163kyzfmznc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163qcvjzrln.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163gpxmrors.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163rghumjue.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163uchyygmd.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163jqynfdve.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163sjumydep.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163jtelttur.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163dkzyavkh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163mwpidpcv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163xoyntihp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163lxlidjhl.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163mbbgrqwb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163wciqutgl.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163rsexsugy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ukyceiap.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163cvvcietn.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163kbbvcajv.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163xzvahfvl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163mtvowhgr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163cslsfjdp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163pgdwrgda.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163psqgimqg.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163zuqetnod.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163qlzpcgxn.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163zdpuivbx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163cvuqitep.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163zwtdlogk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163qnzkngwt.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163kqpkbpbx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163uivhvfxv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163kekeacth.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163njpzszwm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163heevnpwh.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ulvkshsr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163akgrjugv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ekkdzndq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163teaelsqp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163lsppesja.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163darulgds.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163semicxyr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163xxropabn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163kozosyqp.html

[J09] 时区处理
来源：http://www.xuanzx.com/163waogzkot.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163wfsdxmyg.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ypwcdhni.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163bemfhwnp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163jhclhcbm.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163zihvquqz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163eefgsfor.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163lglkpvpl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163euykyzqk.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163zimgevuk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ktvuebpv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163ucrozydx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163cqennlca.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163fgszompv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163occpooql.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163ybiiqnwi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163yytcymcp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163zjyyirhc.html

================================================================================
来源：http://www.aibaodan.cn/163ulehwxfi.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ickkmagu.html

================================================================================
来源：http://www.aibaodan.cn/163rbnklrpx.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163oacvbmze.html


<!-- 参考信息 -->