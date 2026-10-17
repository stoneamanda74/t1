外链999!wailian999！

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163uzvrhtbe.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163hxbnqxxe.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163isifmlus.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163uberqjcy.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163rpxbppbu.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163dxzixeyy.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163rbrcodem.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163cjahrnzt.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163qtgscvhw.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163fgurpkuz.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163hazeslor.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163uewcsmei.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163gzxmvmpb.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163dnqmhsrp.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163rrwvprua.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163wltdpzlf.html

Java: u instanceof User
来源：http://www.xuanzx.com/163jlfhuxki.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ulnhngin.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163tnschsvn.html

C#:   u is User
来源：http://www.xuanzx.com/163uxjcsbuk.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163coinihgf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163gahlvrld.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163naiahsox.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163eodkwnhr.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163rdyogvdu.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163urbnobwf.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163dftbdsgm.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163tavuwlsk.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ygnjbnsm.html

[G15] 枚举
来源：http://www.aibaodan.cn/163giagshts.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163xzigxeeg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163anwrgdjr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163exnasjtv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163sgbvqwvj.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163mtkptudn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ukuiuluz.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163wbrnvzrn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xfgjcfwf.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163qzhhlqmb.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163kuirdngp.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163swrpbwry.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ycbzpirm.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163irttqcnk.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163evnzfnth.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163qtpuqqfz.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163yklgwmmq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163mgtwzhnu.html

================================================================================
来源：http://www.sxryk.cn/163wwirujvh.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163gneekekg.html

================================================================================
来源：http://www.sxryk.cn/163fbuywtzz.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163gblqzuxb.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163nkxlgice.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163cldichkj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wbnqibkr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163dawcgsrl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163yhssnlwk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163cbhbjgly.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163gynmswwm.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ppscgbcl.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163mkflhbvt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ehxrpnxv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gizppcqe.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163smsetiir.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zjmazccf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163runqcmzm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ipbwhvzk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163jkmzvlbx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163gawkzsgx.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163qcirysdh.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163gblgklwe.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rfmsqtoi.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ivzwkfhq.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163yveagccv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163njgjmevx.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163pmwblfie.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163lvbdpxfw.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163asxdsmpb.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163opoxnsem.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163lpdgxbcy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163fetflhml.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163biaiqyqy.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163roieprun.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163pbqoafxw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163fijithed.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163kxikdwtq.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163djzqynqk.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163wuqbzeul.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163zqgblqhb.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163vyoqoceh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163slblefdz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pprzbvpj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163ytbqsail.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163bfweuoji.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163bwixokaf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163pictcbto.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163bkmsiyci.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163kpjsqkrs.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163lrrmltrn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163mcpipwxf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163prdmvtcb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163dvuvshei.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163avwgkdlf.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163pcotuxsb.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163lutuwrun.html

[H07] 断言
来源：http://www.sxryk.cn/163bddwfgxe.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163sviqoxum.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163honppukq.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163hfmpikhn.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163rhrltyal.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163jifhzgwe.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163bdkhbauu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163szozflwd.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163ggvgrzug.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163wmpyvqik.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163dspncqks.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ldyugbig.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163szkgsunu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163xtvyqtkv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163pfghbbuk.html

Go:   err.Error()
来源：http://www.xuanzx.com/163vnszzmvu.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163bsktcwlw.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163nijtrhil.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163wjtbdami.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163hrwvbfjj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163tfjdjvdp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163eagnnqyx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ncjucnuz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163kqrwflkc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163xheurelm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163kajgsqew.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163dikmsoas.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163wnyonxab.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163rrvqicav.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163lzmdeeyd.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163lwuzoeym.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163cvwwvhcy.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163nsfxezbv.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163kgkvdvbp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163jnkeuobm.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163trgzpfde.html

================================================================================
来源：http://www.sxryk.cn/163rbfrrmse.html

I. 正则表达式
来源：http://www.sxryk.cn/163qvmrdzuh.html

================================================================================
来源：http://www.sxryk.cn/163paojekvo.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163wtardtzx.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163unddwofg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163mktbtgcd.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163kbwnehna.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163echkumvy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163kuedqxvu.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163fxpnxetb.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163uhqgmpdk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163cjfwlfcn.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163etzjjyfq.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163bngskzuc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163lkcahomr.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163uytptvhu.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163xtlnxsxm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163vwinsvvf.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163rwnkfbip.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163artwqpsk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163pgracsqv.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163zviasccf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163thexbtpb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163kmfzjprt.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163cumsorwz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163akizkrpt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163cpnnbhka.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163otklknsj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163psuzmwkf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163zrjxgdjn.html

[I04] 正则替换
来源：http://www.sxryk.cn/163vnpdjcng.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163pbbemxpt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163fnlcagqh.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163rtetrgtd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xofqpgoh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163nivponmr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163chasuiss.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163nvdbgoqs.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163xclnhrkr.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163eoftgpro.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163wcalmbiz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163vjxkbknv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163cvoziozk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nyukmhte.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163wrosqynk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163yaksxelh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163dycwhcyr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163mjttpwrz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163gdwdwkvs.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163dmdynzwh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163dxhqavha.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ofekasjy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163cvzyzflq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163wdeevryj.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ddqabjxj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163dxzbdqsa.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163jlijeeiy.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ioepyckl.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163pmhmpqvb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163qwqgcbyo.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163vyofyvex.html

TS:   /error/gim
来源：http://www.sxryk.cn/163fxmesfla.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163zyeulngb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163zgupsarf.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163xaqyzueo.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163jdoghgjd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163gehqwdeg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163dldrjupv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163wzmtuiku.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163mhrzjzsx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163kodbvriw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163lnrrfhrd.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163haxgihju.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163gcezhdaz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163fmdtaxvi.html

================================================================================
来源：http://www.aibaodan.cn/163ryiinbpj.html

J. 日期与时间
来源：http://www.aibaodan.cn/163rhqmqdvq.html

================================================================================
来源：http://www.xuanzx.com/163wlgmkhvf.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163eyzkkpxg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163kfihwcng.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163cjhyzlgp.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163soprdgal.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163nqutlkrd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163uphdtdsc.html

Go:   time.Now()
来源：http://www.xuanzx.com/163qbvvwqmm.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163qlonhjqp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163evbvqtzf.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163wrbrjkxq.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163wyvpdgtd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163aoapkxvh.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163cwkljsxy.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163dzjaqqde.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163qteccwzh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163dbczmsou.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163kkfgtprf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ozfsengb.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163mcnffsey.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163bluoecrs.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ngwxrket.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163lpqausmn.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163stxcqyrk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163wjrmisxg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163lzvtwuuf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163pnovuniv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163wngcvxtn.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163gluyygbh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163bsodlbmc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163bguisnxh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163thvxmtbl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ojdkbwtt.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163lpizftrg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163kanrvrtd.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163bwfvnxss.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163urysxlzh.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163moomouff.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163ohghfgfj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163hnggrrwm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163zzxragru.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163pnjlmkvd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163aiilzptu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163jzgyztco.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163nxqyseii.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163igttqwhh.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163twxvzyqf.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163mrosrkrl.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163bpiounjj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163gdhqajyu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163mfwwhbcs.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163eceasazi.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163tlgholhq.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163voidvifp.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163pwxqadfk.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ghtbnqxw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nbjvglgl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163lmrzjiuk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163bjnpcmxs.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163iobxzdgo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163vaslkhvq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163gbcfpnug.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163glpuucdq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tucofvce.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163tzclwwsz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163fcezfhar.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163bvutsrrk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163gdbhhpjn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163qtotnghy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163spyhwhxx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163lrunesth.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163wguvkuks.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163xtnfqhsb.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ivwzhltl.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163homgfghr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163laoahvqd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163gfpskdyf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163mqkgddck.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163stmknguk.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163kqkpauyr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163cwlrfaeq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163nevsqnuf.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163hdojllbb.html


<!-- 参考信息 -->