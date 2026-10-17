外链999!wailian999！

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163wwnoawbp.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163clkhbafs.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163sqexersj.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163wetgoyep.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163revmslhm.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163mhlmmkgp.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163usvcehmw.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163zdmypfss.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163gyyhgulp.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ineizbjt.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163herlqulq.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163fmagrtkt.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163azrlwrvl.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163kntuoowb.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163zmiyrqdp.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163xpjdmedg.html

Java: u instanceof User
来源：http://www.xuanzx.com/163lqqxpspi.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163sgdpcoue.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163lsxhikwa.html

C#:   u is User
来源：http://www.aibaodan.cn/163phfygyea.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163aulizmxv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163pwnyckox.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163kaqvhysc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163maoatbxg.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163kzysbtvo.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163iuduwxzd.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163wqhoanpi.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163qtkcnyur.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163eyfotphr.html

[G15] 枚举
来源：http://www.xuanzx.com/163cvnbmpta.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163sugsnths.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163qbupnmjf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163zuwsaadh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163oszhlvfv.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163qbowlxlc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163oktqwwzb.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ihdeulbo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163cxtyhhxt.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163tuvteubx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163avdbskts.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163noobijdp.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163xfflupuy.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xaunmkts.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163gsnijsxg.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163siaeztwu.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163svdhvkvl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163qtljsark.html

================================================================================
来源：http://www.aibaodan.cn/163pzazbzts.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163lkivhrlg.html

================================================================================
来源：http://www.sxryk.cn/163ebrczdwo.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163jjtavjbc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ofnwvnbl.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163oyvbbqew.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163kkdstdui.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163jknsdanc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163xacszham.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163fwznvtte.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163wtzpbwkk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163almgaurv.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ysgdcwmn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163nwmozsed.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163eufpjzqc.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163iihvvzqz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kcmbzivn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yugdwyiq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163gbmxoncd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163kvjxzsao.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ynrvipdg.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163afjbvcbv.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163fzyjcota.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163msxxsrfa.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163vwgjryjl.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163gevsxbxa.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163hrraqpyv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163jessfvwe.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ginwtksq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163jcnykikp.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163yhrhfnod.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ftazlqpi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163lvqenffk.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163jnvnqlrg.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163giyrhzac.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163brhegtbs.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163lqjswfnn.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163cvosbdus.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163hmbsuwgy.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163bzaolnyu.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163bcnlgodg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163vvmvjvga.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163hrgebjtr.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ocrszxed.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ejkdlrkr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163fwhglxks.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163itvbylve.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163btfgposs.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163emittyyo.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163thqpvwdj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163sasndsap.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163pngjdhiu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163wnelvttj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163agezeyfj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163dmtzswmz.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163fgkkprth.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163xdspekru.html

[H07] 断言
来源：http://www.xuanzx.com/163ekqmniqm.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163enjpbzpo.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163gndedeps.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ofnyqxns.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163beaannlt.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163dstptxca.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ylugjvxe.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163mvhzyeus.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163czrzqlag.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163xpdhtqnb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163tnkdatcc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163grjngodx.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163iwlwuhgx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163klrvuqqj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163dmpggutl.html

Go:   err.Error()
来源：http://www.sxryk.cn/163jiezxktx.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163vxrruxlt.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163zxpwoean.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163apdfjwew.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163nnkequjf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ntnecahw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163vwjawhya.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163jdygmsmd.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163twdrgetb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163yffbnxlk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163qozggqef.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163gpnwyyhm.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163djniqlan.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163zgqathxj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163uthvxovi.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163xdnxfkjz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163mxftcrjq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163kimbmseb.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163hntsfdwj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163xsylqprf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163zydieion.html

================================================================================
来源：http://www.sxryk.cn/163phvxruxl.html

I. 正则表达式
来源：http://www.sxryk.cn/163waazuwzp.html

================================================================================
来源：http://www.sxryk.cn/163ctzofwce.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ikfokinn.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163trbcknxn.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163svwygszn.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xzeoiarj.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163jhfhblew.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163qouxffmp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163uboynqkv.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163mmnhddgx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ccgvzpdq.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ceiwwmvz.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163scewsbgr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163rmyhsjgj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163fyxymwsc.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163zscoynym.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163vovqwxey.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163opoiwahu.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163sidtgjjo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163qnfhjqub.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163dmhzcgwg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163nxoftfsx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163yjfeqnql.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163rxtdrpbm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163fojnxbvg.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163yuqxqxhn.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163mvaavvhq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ahjbtfod.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163gjjldgpx.html

[I04] 正则替换
来源：http://www.sxryk.cn/163hkkoxgfe.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163udljflnw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163icfaiwlt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ylpwtoed.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163szagtmlc.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163zuirneum.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163baqomdte.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163jdwymhql.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ueiryont.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163mvmaqnxy.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163gyplqmow.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163gdldtddk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kqwhestq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cgfwsfps.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163gebnoqln.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163eaunxppy.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hndldzxh.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163aonykcln.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163wfzfgfqf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163yyjlwhhc.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163vdxlwkgc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163sflchafa.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163buatyeno.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ypfyqmoj.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ypqooirz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163chbjwymo.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163jdcrfnbh.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163fuafzihb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163jkgqsagv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163pnxlvfwr.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163efeekcii.html

TS:   /error/gim
来源：http://www.sxryk.cn/163xyvppzcf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163lwaksfnv.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163pdskipwy.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163hcokvfyn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163ebkzsxzu.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163oaymgdwm.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163jkfqkutr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163mwdqxzkh.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163gegjyqxe.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163titfcgpk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163hpeisndq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163nmimnosk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163qantnnux.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163kaemxzeb.html

================================================================================
来源：http://www.xuanzx.com/163bpyouqkb.html

J. 日期与时间
来源：http://www.sxryk.cn/163dsrbbxsd.html

================================================================================
来源：http://www.aibaodan.cn/163ujmuynye.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163sgdepeyp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163mwpivefh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163tnzkeopu.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163szcrhmsw.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163asclwlpa.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163vsiqsfdp.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ugbbcrjk.html

Ruby: Time.now
来源：http://www.xuanzx.com/163cbtzusbr.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163wpbjxkqv.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163vgzcjvuy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163lvnrrdav.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163pogfkvub.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163wkcnylma.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163bqlqjgvm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163nmsfnfua.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ieleejks.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rglxunds.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163ycwvbefq.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163bwqhjeaz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163bvesvuxb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163qnbrfnzp.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163uzzkbnhl.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ctwfyduf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163nabjhnpw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163qjganybk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163yerbjkug.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163twlicenv.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163cqpesjod.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163csuctcvx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163sjnbhcut.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163lrgptnng.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163jfiwmnwm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163wgiqqbxi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163uytwudfm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163mhljwlkp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ehmqsumr.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163wirvlnmf.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163dledgxfw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ubftmbsp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ivgbwvdi.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163mlaefoqp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163fzdkmymh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163enussuku.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163zstxixuc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163uojuupoo.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163vqxmsvxw.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163xtewxony.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163jayjuvvg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163rlglcsbc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163wopwkjhu.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163hyoxubrr.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163decxkgap.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163rnbtflcg.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163xhxibheq.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163nvjzykdq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wmbngyqx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163shqyaqbr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ogifvkyl.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ztezqbkx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163scgqcwfp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163mkwijuea.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hkrymmdy.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mtuxyabm.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163wjpzifem.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163kodinxrx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ppgfelci.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163vzuesgph.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163waxdogqc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163fkfjgnej.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163iusomykj.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163jvgizcsv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163jnkzvsyz.html

[J09] 时区处理
来源：http://www.xuanzx.com/163cbykmuxh.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163vlwkrbrk.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163vaapgpvf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163pjswrehi.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163lndvkjhk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163auklgbqg.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163xoqkskxf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163lgxrglaf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163pkylmvxf.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ntsulvat.html


<!-- 参考信息 -->