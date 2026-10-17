外链999!wailian999！

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163gwsqlmvv.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163blzzcefv.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ivffhuua.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163hffgofov.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163jmmnxrnm.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163pyvxeumu.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163rjxhztsq.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163mjkwkwmv.html

Java: u instanceof User
来源：http://www.xuanzx.com/163rkfoqomn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163cservbnm.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163xvqmqwuy.html

C#:   u is User
来源：http://www.aibaodan.cn/163owifxgfb.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163kaztmlqh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163bpieqzfn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163szqdxxqv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163xamhpiex.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163uhafiiib.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163prknpiwe.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163wsxggztk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163cufqsint.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163hjjaargn.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ryknhhyz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163uueaxkkh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163qadnpitk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163hjnpjnow.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xnyztlgd.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163vkqcjapg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163kzvtbbxi.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163pqhuyvqh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163lobnfaxc.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163erltpbgq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163mpgevxeq.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163zqwjzpii.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163wapmryea.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jpajgtdk.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163upnylqxx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163nccllfju.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ujznpnft.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163iiittmps.html

================================================================================
来源：http://www.aibaodan.cn/163paljyfwq.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163bnhfrzwn.html

================================================================================
来源：http://www.sxryk.cn/163hxssqohv.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163oqygpdoy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163xvpqdufi.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163rshsuonj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163sbfcxtqw.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163zuyxkzzo.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163zmxmacvq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163phpemasr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163octcbyiz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163lssoctzk.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163yrcntfxj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ealujucu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163grghmxcl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163eoajanlb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jflneoqe.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nhqtpkge.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163mmjyyaqk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163shojgmma.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163uhhvzebu.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163vkjylvqo.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163icsqakuu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163jkrripcy.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163lqpdnawy.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ediaodgb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163hvkugava.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163gbinshqc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163gdvdimmv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vkhcnhes.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163hmpmbhzn.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163jcxvbcpu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163qdkwmlvk.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163uwfsyhic.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163elkrvffc.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163pfpwilol.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163cpzwphdz.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163wklhohsy.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163tezkdvrx.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163qbbcmnwv.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163rzeouffs.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163esqtasjp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163pebiwcel.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ccvergsz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163eiqzuswf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163olxyvkma.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163txpifjgo.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163dphbamlp.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163gaojwvow.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163hrjugztv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163aavzkrbu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163fprseves.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163rvnfdtwn.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163oojpansf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ekeyavtl.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ojfmurcm.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163fumnvbad.html

[H07] 断言
来源：http://www.sxryk.cn/163jvmasvez.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163rppayoxg.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163sdkusjex.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163qswjifgx.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163mkormxng.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163fhpqgkbg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163rxrbeelc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163hdxoaudt.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163dxthyyen.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ouiflziv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163zoziaddk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ygkyjkzz.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163yoemxlbi.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163bnacdzff.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163hrcgphfc.html

Go:   err.Error()
来源：http://www.xuanzx.com/163mdsfrbcz.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163bailisfv.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163hqkyfgqy.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163yntajvog.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163xbhzrzxn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163limjeggv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163gvljgpdc.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163lulokrrt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163klltuscw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163zgrjwixd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163rwvgnscp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163fhdnwvox.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ydkpeoxi.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163keuohagk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ogkujgql.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jskmhlum.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bfjyxzkx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163uwuskxwf.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163hlsawzyr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163fbidebwm.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163lnhneitt.html

================================================================================
来源：http://www.xuanzx.com/163crpfpkqd.html

I. 正则表达式
来源：http://www.sxryk.cn/163gpwcfnjz.html

================================================================================
来源：http://www.sxryk.cn/163nrquyrob.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163mxicemti.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163hnfwfqyi.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163grjwjqvz.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163cthtrted.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163exnrozpf.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163nlxqptnz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163tpthaxqy.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163vkluckkp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163zwscthwn.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163icztzlvt.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163qpvpynoe.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163alwhzrbr.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163xfxmbefe.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163stcbkuou.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163zbwrvlxg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163rsuvtwon.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163dnfaoouk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163lwmfvmrn.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163qiphhbxt.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163inzmcoio.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163qmuasdyd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163vttoqymy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163lahaitki.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163sipswahp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163cwzsecxp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163snfrylsp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163uqemmjda.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163yqsltnxf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163urmckxtn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163cptvrdkb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163puifbmcu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163tkcgwkiu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163avpqsrmu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163wyggsrka.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163tekcidgh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163cqacsahf.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163smfufvde.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163abnnckkh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163scaepfbm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163nqtypxqz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nvniiurm.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163jwszqypb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163kjscpxsi.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sgxgykmt.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ugbuvcce.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163wntgdnnz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qzvkddbq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163jrxqhhvs.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163fgdhbvvu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163uljrwxzf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163sylubles.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163qzwgunss.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163nwyvwxcj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163dwerzlfm.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163bjaucypk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163dyczpeur.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163kcblgcjp.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163cemczrhm.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163raifweka.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163fmopbsih.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163mlwvqhfo.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163rvlnduvo.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163yznybyme.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163uyahwxmi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163lmmjqzod.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ggnouxnq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163inxxcsbw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163djemcgyt.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163udhbzwso.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ziyelkhp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163coqomnjx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163xsimthyo.html

================================================================================
来源：http://www.aibaodan.cn/163kucrvglb.html

J. 日期与时间
来源：http://www.sxryk.cn/163snsbspfa.html

================================================================================
来源：http://www.aibaodan.cn/163eitpojdb.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163vvdtxzef.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163tgbyngnl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163suealpwy.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163etpbyacx.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163afdkpato.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163pbqqhqba.html

Go:   time.Now()
来源：http://www.xuanzx.com/163bfatetfp.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163keswggfe.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ituljnap.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163zyyotbnd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hkpzdoqg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163cojardfh.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163uzztrovc.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163zgeofbkb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163btribufc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163kvlshwgp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ulcmtprd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ukbxtdbs.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163xveftpgm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163plyqtmeg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163hfbdqvuf.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vtxanyww.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163iqzofzds.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jgqyvdju.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163vjtfkicd.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163lhzozllp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163qxjjopbf.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163szjcntun.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163qevylkwt.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163pgvrcgyh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163amiekmca.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163lwfdypdd.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163suxhezzd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163yrpnkgln.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163jhxcegmh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163izgcqtvw.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163gbmecjiw.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163glaomnka.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163pxhxwljb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163bzthhjzd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163hmhpdbvt.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163mxjxzzko.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163oqlkrloc.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163lpufuvdq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163yekovrnw.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ehmthpyq.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163tutkzzat.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163kbsydubv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163vaxttqob.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163xpxullnt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163mpnfetiy.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ohvtlbxg.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163knyigott.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163zpbwlqcb.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163uknxrljf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zioaayhc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163mutlncvi.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163srmfqtfh.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163fkevbidx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163oueaumzu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163izarohsd.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vmvhkkfw.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vyjcrzfj.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ojccoxvq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163hwahghds.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163zhjfhkdm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163qumphyby.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163vmxfpjbn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163audikhyb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163smcqkssr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163wmaxoack.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163kpthzixc.html

[J09] 时区处理
来源：http://www.sxryk.cn/163pidhghtl.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163yfzqtygb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ltbwemww.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wwwfpssl.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163kmwhglmj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163jpfmoxjb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163sxqpmmxj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163zfoltkov.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163gpfxudxd.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ynytxysv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163wnfyxrej.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163pscfhfwn.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163gpjcivor.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163vgjxamdf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163skpyybip.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163etgqxnyz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163pjvtyglm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163oazavrmr.html


<!-- 参考信息 -->