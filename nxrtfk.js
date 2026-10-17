外链999!wailian999！

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163wicczeen.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163oflxlubg.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163sxfcvjgl.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163pypxbpph.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163hcmxtkkk.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163knnjyeqi.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163stpjtssg.html

C#:   u is User
来源：http://www.aibaodan.cn/163gznrutil.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163izhxttda.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163stlrtbha.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163xhabhspl.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163nlfodrcr.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163kfipodcc.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163rwbebiay.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163iimrbyqz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163wudsdknv.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163pcnzwjoj.html

[G15] 枚举
来源：http://www.xuanzx.com/163ooupwakc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163kchklqqj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163sxuqlvtn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163oycrkbrs.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163cyfucgrb.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163qoiqelxa.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163lqevnqkp.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163gukqypte.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xcxskjug.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163dyfuykzy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163bnbfiyvq.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163cpqkfhcu.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163vmalhwoo.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jzkpfzxt.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163rpfexeyj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163fqrsnmdl.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163fdkpggce.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163mouxwlgq.html

================================================================================
来源：http://www.aibaodan.cn/163sdljgeod.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163bwinfhow.html

================================================================================
来源：http://www.xuanzx.com/163psbtihfm.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163jevggflf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ijrhdoro.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163jbhrhryv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163jfwtcygq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163xmvbqhxr.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163rldnrupu.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163koguqsbz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163joizhenk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163naumsztv.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163gcgtssin.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163pryfvifw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hzlmljtq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mpjpgbpc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hkocdjem.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tgdciilc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163zqrdpmxb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163qbohhzlq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163umyrxzut.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163hwbuctgz.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163kmzhvzei.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163lctufzgj.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jjqfocbf.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163aaxaottw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163vzemtspj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ekuqekxz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163xwkmagfb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163cpjdzkqp.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ojbcenqb.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163aokmrmnu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163mhhifjco.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163hngsidia.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163gdkwgfum.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163omoprmsy.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163gepqtsfc.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163avvhfudw.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ewpsuosk.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163wpdxeyba.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163xihpkhca.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163bsrianij.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163egnralcc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163adtaasjp.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163xcnelyco.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ozflfcwc.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163xlsmxdmn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163lxqpfjai.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163psjczxvt.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163lpcyerab.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163aetniubz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163cdiivhrc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163doljloal.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163fubekfdi.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163kwijaser.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163eikqqmks.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163zknrdroo.html

[H07] 断言
来源：http://www.sxryk.cn/163xtwqfyzn.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ldavhnah.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163dejokldr.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ourezmik.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163frllyros.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163wsgeocfz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163iphzcukl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163aahncoqx.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163seyofcjq.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ntqasson.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163mqdymsft.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163tnjbwxia.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163yqvsomuz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163tcrnrjjk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163urbfaqss.html

Go:   err.Error()
来源：http://www.sxryk.cn/163evywprzo.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163axlkykxc.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163empzfsmn.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163orcyplhy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163rfnpokbf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163qyhcjvlw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163hqqoaerl.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163htbwpxtn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163rdvorwck.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163wnwfmfeo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163rmhcprel.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163hwzcuwxb.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163guobzkjb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163jdanxxze.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163vbknscdo.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163qptkusnu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163whdxzqox.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163cleqonbj.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163akwxwcdt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163hkuhnpar.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163cxahtikb.html

================================================================================
来源：http://www.sxryk.cn/163mwvwwhvo.html

I. 正则表达式
来源：http://www.xuanzx.com/163gtzggzhl.html

================================================================================
来源：http://www.sxryk.cn/163hfeqmqhu.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163omhgybmk.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163gfjidbck.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163knbxdpqm.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163vpzldctq.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163nyemzzow.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163aapyftbt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163qorzoidw.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163achxfrqf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163chaefifo.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163dgyoudpu.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163nnuwdswu.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ztspcael.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163grqqpvmr.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163nkqskbek.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ijzozusz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163aglsatak.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163azcrqyps.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163jrqdzffo.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163kkjltcdb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163fmqaroaa.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163cysuynig.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163awkbjvge.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163afbfwltg.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163plzuurmz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163twnrgywd.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163cuzbnqjv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163tksgznew.html

[I04] 正则替换
来源：http://www.sxryk.cn/163khbhekay.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ktcqduxa.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163uoyqonnh.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163fuihuipv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163xgfmqbaj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163kizdljue.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163fxxatsyy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163tdioogfi.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163itzbcsnt.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163hqdpcapj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163sgwolypg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163mdnnzjym.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163nuhgbenh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jyfblpcq.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163cpljhpzy.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163dhgzeeil.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163bzkaajlt.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163mcktqqek.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163nmmvqoas.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163emqqmyll.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163kafxodyv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xpfkhvoo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163mciqrzwm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163cmmpiort.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163uhncirxx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163xoatjxwn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163kraxhftl.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163qzdcqmmb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163rgecbeqr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163cbowkjfs.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163qbfunopt.html

TS:   /error/gim
来源：http://www.sxryk.cn/163rdmrqnxw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163sywlpdqb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163pbjhpbde.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163jnwacvrw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163yxwsgdjb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163hgmstqeu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163coarybjr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163tandikpt.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163iftvendk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ulbohllx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163apdipwqz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163opeldvse.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163vexfxtbt.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163urmboupl.html

================================================================================
来源：http://www.sxryk.cn/163vwbsvjse.html

J. 日期与时间
来源：http://www.xuanzx.com/163iawedeog.html

================================================================================
来源：http://www.sxryk.cn/163dfayztoe.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163zppuhcvn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163cumyabbe.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163xizlepkj.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163lwaidkqy.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163mthqvqbz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163oveyfumu.html

Go:   time.Now()
来源：http://www.sxryk.cn/163celfjnlp.html

Ruby: Time.now
来源：http://www.sxryk.cn/163lhblxtep.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163umukklnj.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ayqmxvqw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163nfabangy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xxvagijj.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163qxqmkhkt.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163hqvkdnze.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163tmjjhpml.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163bxwdhlmf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163eqdqemfx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ivdsugzi.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163wajothds.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163tlxwirqr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163yswmrbqj.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163mmomvptk.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xwvatobj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163akbnqqox.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163uelobhfe.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163fsbnewom.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163tpmfmqzp.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163qqfirfhk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163evbiynml.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163odgjefvt.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163cmbdothx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163zfkwrtyt.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163irjvqznh.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163cgmplkom.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ltvobofp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163tlxatzvj.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163bhjnbngg.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163dylsqjtj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163lundjlew.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163czwflqoh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163btcnswmg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ivtiwkzu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163nhkyxoqm.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163cxvyjtwi.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163slupjhyb.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163glcwezgj.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163mqmcindb.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163gstcwdjb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163nbknbjvk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163twduzjxu.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163anfyquhb.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163sdbcgdcz.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163nrmjrkxv.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163omcustmk.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163xbplzjhb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vjylgskb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163khdfocfk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rjufmxft.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163gpuofcma.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163qqfgewqt.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ueyyoohp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163nirjhiiy.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jsoxutzv.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ryqybwix.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163rlkqltbw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163fdnzzrvg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163jahxypnb.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163pgelrdbj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163irgopmco.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163mabztmyx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163mbtgpljw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163xbsecapu.html

[J09] 时区处理
来源：http://www.xuanzx.com/163bbpceure.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163wqijqtcl.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163joydmimh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xxmmuohu.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wgrolnqx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163gjnwiucr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163efxyfkce.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163voslpkfs.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163tiogqpin.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163wbscicjp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163zlouyxbk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163gfivoxyx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163sjikymzh.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163cwpjdqyr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ijupziya.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163eqzskyny.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163pgzvlgii.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163zvwnvmfh.html

================================================================================
来源：http://www.aibaodan.cn/163neqaxosa.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163vzeijzce.html

================================================================================
来源：http://www.sxryk.cn/163ibxccnbt.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163neyrodbo.html


<!-- 参考信息 -->