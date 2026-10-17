外链999!wailian999！

[G10] 访问控制
来源：http://www.xuanzx.com/163mlyvrutr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163iokmtcwv.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163nosmpkke.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163xpesdwmk.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163aqibcsfa.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163idrkncut.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163yyfkvptj.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163wlithltd.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163cfrnszgd.html

[G11] getter / setter
来源：http://www.sxryk.cn/163pwgazddb.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163knhohgtn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163krrrhogv.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163nzzuwgdu.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163bjpmbcqe.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163vpiamfdk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163slewpuni.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163uuwgtalm.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163fyzixyrc.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163emjmeqpi.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163zatubqyw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ftlmuanw.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163dkgjlezq.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ouevucua.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163lswyazqt.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163putxokna.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163jtjuzsyg.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163vyfrogol.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163anvfmsop.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163otvkkmcc.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ivvarwtk.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163vkytzjmw.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163zaxbtnrz.html

Java: u instanceof User
来源：http://www.xuanzx.com/163zbdljpzj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163qahejqmp.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163xzktrwsk.html

C#:   u is User
来源：http://www.sxryk.cn/163wchrykxp.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163lmfdpuve.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163adupafpf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163pskgogau.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163clseqmov.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163skcevwmw.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163efvpxnwz.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163lkdpesqo.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163zfmykqaj.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163hkijrjyo.html

[G15] 枚举
来源：http://www.sxryk.cn/163ijziaprq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163tipamuns.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163pzyidqqh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163axjlhewt.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wnayqvht.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163pgcugrts.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163vyfgwyba.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163cnsapigq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163gixhepkt.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163wolzxwcz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163khldubdk.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163fghjwiaa.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163cyvlfkaw.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163cittnzoz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ivqhjnmn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163rqjywbad.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163jssacwzh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163vdrvhpcw.html

================================================================================
来源：http://www.sxryk.cn/163pzmvzmax.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163axbotfhq.html

================================================================================
来源：http://www.sxryk.cn/163ccawtnru.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163kenbrcau.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163pmtclact.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163gjqpttrb.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163tshvisju.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163kmfygpcl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163srgqcewm.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163yantvmle.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163uojrybil.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163psrlsgoe.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ziigrijg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ypusbkci.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dfldfknl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tlmrhvix.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mmzvzxxx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uxrocqbr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163fucyqlwm.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163srtsjjsc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163cujrnmci.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163liuktboi.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163htiwqqbw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163nfgrlxyl.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kxmghvrj.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163knyhxmof.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163qhvgjpoa.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163nhzadsst.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163xraacuit.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ihxmhncp.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163twwcllty.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ziotydtl.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163awbmbrgc.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163eeolzfza.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163daaclhmh.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163mlmqmsvr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163jhclbktn.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163zjqhokkc.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163sheywirn.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163dkxseudg.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163kwplwygi.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163rfuzouov.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163xnazdozw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163fbtuspnr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163ghixomrf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ogxdpkpg.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163hmcdenuu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ofgoxvqv.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163samidxle.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163pqhkabei.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163cqdkytog.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163tabejkos.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163wxwwalqe.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163khmrvlkz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163epaafkqa.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163efjwcana.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163dpbamazm.html

[H07] 断言
来源：http://www.xuanzx.com/163frrpdsud.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163twvwnnhc.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163moqpptpf.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lmqdkkwc.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163tzllrqkn.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163zibrknqi.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163lhuorfqt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ejprttge.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163pujossjp.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163shpovzcj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163oixrofix.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163bntigygr.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163qlzgeckj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163plbiihhq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163ljlljfmj.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163rgirysym.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163godqtnqi.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163tbwgiyws.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163rimswlju.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163nzwjkmep.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163hoyyqbjz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163wgwyvgal.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163obiaqhvp.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163vhhyhyiv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163buusrokl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163knbhncil.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163rzcvdajh.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163paoskdyl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163xgpbqhtj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163mkhmwrfx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163muczhmvy.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ornemgnq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163erbhxgpo.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163tcjubyha.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163oghglhtd.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163xijpekru.html

================================================================================
来源：http://www.aibaodan.cn/163rlzsiezl.html

I. 正则表达式
来源：http://www.aibaodan.cn/163scnfpchn.html

================================================================================
来源：http://www.aibaodan.cn/163lviidcjr.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163lzouejmq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163arackhwt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163wmrqdfgk.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163iwzxoquk.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ujpamauy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163fbypnywa.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163zbvhakfd.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163capqpjhd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ldftvxfh.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163jouuujdr.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163hencgndj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163wmttezxp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163yjvnckqw.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163yqcjjkdy.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163cfcxbgas.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163czpjnzcx.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ddrrncgh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163updpnzua.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163bodriyso.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163wodjdwbm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163nsmqdsdz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163muhoubgh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163xowrplsi.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163puydokwt.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ckzkzlcx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163aamwpcjd.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163scqsapng.html

[I04] 正则替换
来源：http://www.xuanzx.com/163xixgdfxf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163dmmiwnmv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163jpkfqsxn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163gbiwhabx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163arvohahx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163omwairga.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163mgcphspx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163xsjnqrxd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163bnuctbgv.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163qkworkni.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163jnouygkn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163bjufiboj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tevudiia.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163dwuhofwg.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163jnsgtozm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163agtfpjax.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163quopqoqd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163yqlfktjn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163thyhzuee.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163peaviehq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ffuilbgy.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163mlfhujkz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163nqhhzson.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163qjftmrqr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163bmdgxlxf.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ydgdfccn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ungwpgjd.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163qyjpvicg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163udftzmuf.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163kwoyamsw.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163itrqojze.html

TS:   /error/gim
来源：http://www.sxryk.cn/163qbqfqqdr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163hhjgshku.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ttkkpdoe.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163egrkrlkq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163btfxcmrb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163vcorfsha.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163tnhgpriw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163shtgltqq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163qhdkvvwi.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163odbyiqwf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163nuxfibam.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ocegsomd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163imxuxebq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163wfdijcys.html

================================================================================
来源：http://www.aibaodan.cn/163fuctxsnt.html

J. 日期与时间
来源：http://www.xuanzx.com/163eisqnqmt.html

================================================================================
来源：http://www.xuanzx.com/163hmfuhtvq.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163luwtohqv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163ouaceydl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163yzpcqyqz.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163nphqddkp.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163jehqkaol.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163gbfsewok.html

Go:   time.Now()
来源：http://www.xuanzx.com/163yakkerbs.html

Ruby: Time.now
来源：http://www.xuanzx.com/163dfqkidtc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163jlxjjwuc.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163aawtlpvg.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rnusmdap.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163orqafvzs.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ddwzssrz.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ckhxfuch.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ewupbmvm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163odglyefr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163fvfkqtpd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163cdfrweya.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163buxhxufs.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163tdnpmgxn.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163cdwlgbdd.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163frcvvyff.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163owknkxwp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163esfracnf.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163vmjveaci.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163tbvvwoye.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163teyzkvdp.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163bljnoghy.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163pbctftnl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163rysrmbjf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163zglvimjr.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163hzuigofz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163krqibnlj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ruktzwzp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163pyiypkif.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ctdvssqt.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163xtufubxl.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163lwbuwnqx.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163lxqfcuou.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ojpefpwu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163gqanplte.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163vxjanobl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163dtxwlasu.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163cyjwtzpc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163hgfitgmo.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163oxnvrasj.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163twufmxke.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ikrvettm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ngamwmpa.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163mvxnkaxd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163gkfeuuio.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163fdkjlnev.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163larvrhjl.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163podmrgsq.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163fyluncuk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163pejqrnax.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163qqzrtddd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ouqaptdf.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rdydscji.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163lxtsrqgl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163qtuzojko.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163osshxrxs.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qzokbyrw.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163rdgjqadm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163mynmcrwt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163imeadhaa.html


<!-- 参考信息 -->