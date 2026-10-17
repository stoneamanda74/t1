外链999!wailian999！

JS:   super.greet();
来源：http://www.sxryk.cn/163uncrcrag.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163tmliwyjs.html

Java: super.greet();
来源：http://www.sxryk.cn/163ggupiydu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ivriugqk.html

Ruby: super
来源：http://www.aibaodan.cn/163bmifgtvw.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163emfmqfpt.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163uatgmnyl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163enpiygdy.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163xbywngmi.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163nmwtqvwi.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163daprlgyr.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163roetdjjc.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163fbwhnmlc.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163wfmjtayp.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163dgtqefwe.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ahiuxlij.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163kybkjhkp.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163clcafukf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163yxwgazqt.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163chekjmhm.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163omcecefd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163vlxiutna.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163fptcyaxk.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163jqmyafqb.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163hpnrqsbi.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163bftsqovr.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163iykgxsik.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163dlbzonkx.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163anllcnix.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163eyylmmls.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163offxlfwb.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163xurgcofi.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163riolatfl.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163qsoknzjl.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163zfkzuhar.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163melfhyrv.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163wduztbuy.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163cnzakggf.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163irtzchri.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163sxybwnwl.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163snvybnsk.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163wkbwhpyf.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163cduzpxxs.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163iqelprti.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163uiusxblf.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163fgwolksf.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163zcxowhyf.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163pjmcsvsm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163nnaasccl.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163rtkwwsvg.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163pghjctbk.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163qtplnfwz.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163kdawfcsl.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163pkmtxlxk.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ldcbqgwp.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163uyffuqbc.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ozbjwhth.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163gqxzwfbu.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163otoqabol.html

C#:   u is User
来源：http://www.aibaodan.cn/163yvczcwpq.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163jckdbrjj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163fswsbxel.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163qmfzsxwv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ffrqpbxo.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163hxfasxvp.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ziiocavj.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163yfekmddj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163wfgdiyoa.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163rigmjtwm.html

[G15] 枚举
来源：http://www.sxryk.cn/163xxfihfia.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163jltpljyt.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163oswfbqoq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163gfllynjq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vfqcxjic.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163eehjovps.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163kxtvdsgk.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163wonetigy.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163uyexyotd.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163fwmdkbso.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163lbmfuate.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163zratoeei.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ysabgjfy.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163zdwepndw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163lgfmiged.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163cgpaxxtm.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163xmkydufi.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163tnjwwyug.html

================================================================================
来源：http://www.aibaodan.cn/163muqnghvm.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163dtvwmtfu.html

================================================================================
来源：http://www.sxryk.cn/163qjcdkxqi.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163mbyzxyfv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163vhquuawv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163jqvnbbpm.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163unzerypp.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163wgvbxkbv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163xmotjzoo.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163wsihhwrw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163hdbbrint.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ikjbxkpp.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163anrspyqy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163knifcftv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nmyokcun.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bdnevrdl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163muzcjexf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163llxifndx.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163yzcdnzzt.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163whprbgvf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163hlrwiwgb.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163egwpvggk.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163bksmgrkr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zetuffjz.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163bbzkbojr.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163rrrarhzm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163gopxwref.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163iffvjzyv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163vzcbqisx.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163etxkvfxa.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163mzdhmtjq.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163wfywrkfs.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163llpwzbzn.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163uxfqvxkr.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163yoacvmna.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ywfsjjzb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ygbkfbqk.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163xhpmgtbw.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163sunzmvud.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163nicebksp.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163wexqutqx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163hgvqfxmq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pqzkskyi.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163iihhwwdv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163yqyodafw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ayowxyzq.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163msyxgeco.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163xwdianty.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163rvsimtjo.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163hruarazg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163mqdcdxvt.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163wxqntgwj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163hgxqtbza.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163vplxulzn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163wqjkhsbd.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163nlpnzyao.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163xgopgaog.html

[H07] 断言
来源：http://www.aibaodan.cn/163khifvyow.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163nyuedbkj.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163cydavzhd.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163lsjcliub.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163eepfxotz.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163dwgdbtnp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163efoiqqfu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163qwsvwiea.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163mhuvvhed.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163fhjfbsal.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163vqgsscdd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163crbmgzoh.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163gttdcemq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163omzphbdo.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163wjiuvtko.html

Go:   err.Error()
来源：http://www.xuanzx.com/163dnvzfihd.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163iqogynvc.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163wvfmjxce.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163snbkmvqu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163tzqpjppm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163oduinaby.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ohtvlkco.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163rtskteit.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163wyelifhv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163mulbbims.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163bxafeurr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163uwtxwdki.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ogvmoxda.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ogxctasd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163xtznilxx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163idavchjq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163nucrohzi.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163aawyeipb.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163pewznflf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ftntrzvs.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163bcaxlmpa.html

================================================================================
来源：http://www.xuanzx.com/163hxlafoyj.html

I. 正则表达式
来源：http://www.sxryk.cn/163twvukjcm.html

================================================================================
来源：http://www.xuanzx.com/163xjebbhxz.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163nnotwqea.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163biguajaf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163efgkzgcw.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wtfpbyns.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163flgofakh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163gbwygudl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163fgjekjqn.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163dorrfwwu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163oblewmwv.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163louuyhmr.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163fcyjmndl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163xhdjlzqs.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163dgqwapvl.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163fsiufndw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163pqvvnfvu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163okfsrkfa.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163bcdbfsxj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163zcckesnh.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163lrnkeyak.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163cnmiwytn.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163kzxmfwwb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163trjryufo.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163erlxtrud.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163truyafpw.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163grcmtpow.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ueemjdoo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163vjmrsfhx.html

[I04] 正则替换
来源：http://www.xuanzx.com/163zmyszsbq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163plmrleva.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163clxulswo.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163fkhlgjjf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163zuztbsqd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163xlkspspo.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163cfxigwpx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163hqudleun.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163nvpmcort.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163uesrvzar.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163oglxrvgh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163fbhcoqam.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jjabxwkf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163wfwousio.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163zwwfmuue.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163apnxrxvl.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163yyifetif.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163gdjqvvyy.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163zxxkgooj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163vkfmwmxr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163vjnpspvh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163cmpjgwfx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163dculpwms.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163fwflepcw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163grisankx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ighcctsf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163coxoqstk.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163vgecxyul.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163uswnxhto.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163wrjxhead.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163czyvlgkc.html

TS:   /error/gim
来源：http://www.xuanzx.com/163swtqfchz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163vwljibls.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163pgxmkvur.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163fztaxrfa.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163wdfguibv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163epzgzzvc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163tszpeluk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163rzgtceol.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163aemanimb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163pbzfousv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163xsrbvjdo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163oqsjdoai.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163nomqpiej.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163pkduqyij.html

================================================================================
来源：http://www.aibaodan.cn/163oaimewsa.html

J. 日期与时间
来源：http://www.aibaodan.cn/163oqdswfsm.html

================================================================================
来源：http://www.xuanzx.com/163mjwrqoxh.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163eqrtprhl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163zbraedit.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163kswksmqm.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dwrnzeco.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163vlgdvqph.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163iuuuprrm.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ipjfdwab.html

Ruby: Time.now
来源：http://www.sxryk.cn/163mwlplwgn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163gqglpqey.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163nunxxokb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163wxxtoewn.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163zzxbxvtb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163honccmla.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163qrckvjxt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163pdnwhwnt.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163tvtljdgx.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163blhicrgd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163yypkopga.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ocprpghm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163fwvzjdql.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163execoyed.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163dgkafdvl.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ezdvbuej.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vfsitqep.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163vnqguvdg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163xdzouwbu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163sdhsfhyv.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163vxsrzynq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ucpeuefu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163nhdxbnok.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163nabswafi.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ifvrrheb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163sqciyhyo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163onclspqo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163porxhizc.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163kujdlzyi.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163obaumyrj.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163uvxxdopv.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163fbffgphh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163omqheubk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163xapqyove.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163knomrdtn.html


<!-- 参考信息 -->