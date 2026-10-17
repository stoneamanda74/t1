外链999!wailian999！

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163fuktgmgh.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163kmsergkl.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163bbwdksra.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163czuqdedq.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163pcjujvry.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163pdezfdhz.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163cneevrku.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163mbqzbsst.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163lbjdbzvb.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163esmxbdao.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163xfoueqnm.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163qlcqsdny.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163zqpvmltf.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hwpdfboc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163dntnnmne.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163mdvwhgjw.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163vrefhkzt.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ijhgtbsa.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163sqertutd.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163pjiuwnji.html

JS:   super.greet();
来源：http://www.xuanzx.com/163thtgnoxm.html

TS:   super.greet();
来源：http://www.sxryk.cn/163dkbbgmcp.html

Java: super.greet();
来源：http://www.sxryk.cn/163efwgxybp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163yqrnwqte.html

Ruby: super
来源：http://www.sxryk.cn/163twnlazwh.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163mjsaoqox.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163pwdhaoqf.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163jcweldod.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163msinkekb.html

JS:   static f() {}
来源：http://www.sxryk.cn/163pxraitjq.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163agbgweop.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163scqvaplg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163okhdsrfj.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163tytiiwpo.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163wfwsktdp.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163zielzyhz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ckuvhiee.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163igocdmsz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163bscrsmez.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163kpsbplss.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163qqufqois.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163grdqxdgf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163nefkazdb.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163pynktgto.html

[G10] 访问控制
来源：http://www.sxryk.cn/163slrkoyhr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163oxpulkcm.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163uvuobywi.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163pkmgpgiv.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163leevlmaz.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163lkhbdbot.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163jrhnkorw.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163badqoowf.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163rzacpchb.html

[G11] getter / setter
来源：http://www.sxryk.cn/163nokassqr.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163kjuooefm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163evguyssg.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163wlbaaigw.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163llsfyfhe.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163dpqfckhu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163orqfcdet.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163uiblzjko.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163xzkkeepq.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163jgelfqul.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163bvglxzhc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163bkpcojcf.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163zzwhnvib.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163gfykjnlk.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163dcnogpsh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163abwmnuci.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163beaodiar.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ncegtgfe.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163eohtryqk.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ghdetcks.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ikrzvanl.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163tnugwbhk.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163sactslyh.html

Java: u instanceof User
来源：http://www.sxryk.cn/163yxkbwuro.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163vjblnamq.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163mltkkcrk.html

C#:   u is User
来源：http://www.aibaodan.cn/163qxwurxgw.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163qlmslqvm.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163donwxupd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163kyvbslxl.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163avitjqoe.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163vmfqdcre.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163rixqgrxi.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163rcomfxsz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163ljjdnphe.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163jrnvgeso.html

[G15] 枚举
来源：http://www.aibaodan.cn/163wzpxxpgk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163rlicxivy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163jzvecrzj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163kpjvyfjr.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qqcllbic.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163gicrzjhm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163chnibycc.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163rsrkegwc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ebpzyhnt.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163zjdodvxu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163robdeiea.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163yavugjne.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xwepkymg.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163mzuygrhe.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163igdpcvig.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ucrjrmzs.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163fowaeodx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163kegobpwo.html

================================================================================
来源：http://www.sxryk.cn/163alfxnjgp.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163kavunydf.html

================================================================================
来源：http://www.xuanzx.com/163zixvcrum.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163kzazjyna.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163clmixubu.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163cshtwmji.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163nnhlmpfp.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163kprreazu.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163rxcjjnab.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163elkokuad.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163trfkunkg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163qsxlktbf.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163oifsyplx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ulbxgnen.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ahzdvrhs.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163uxhpbydb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163czmvicns.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qplsjxzz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163bqnvfpeb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163drzfdlek.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163hqcucpgh.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163rhrfdohk.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163kedkwgzp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163tjkwzgdk.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163dukclgzw.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163lcwskiam.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nrqaraaa.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163lphwxtqx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ltnbsxlz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163zisxjuhu.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163obilpqjc.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163mmrvxwcf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ltytgoly.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163uquuughj.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163cousmtag.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163zhkvcavj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163snjuwyyg.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163qitwxxhn.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163yplooqtt.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163hfrpbjqz.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ckorlakv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163rjmfyfix.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163gwbocfps.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rzjqjymn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163vdrzbgxa.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163aimtozam.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163mqkhdtmo.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163lixatdlc.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163uhvnxkzt.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163acfqenui.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163mqaoydpe.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163amtpseey.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163okoadcbd.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163kphrmzdb.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163mjermwgh.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163xhxpzukr.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163vlpzwayw.html

[H07] 断言
来源：http://www.xuanzx.com/163bkzswtlf.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163pmrlqjpg.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163kaqnrmfr.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163uzwoxsjc.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163wnxfkikb.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163apjekwxm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163ocpezdjk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163zjqwrcpo.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163hlhlayat.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163nyknxtjb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163vpqwyvum.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163vzbxrfbn.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163zkdziuwu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163isajrvgb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163xicpvwox.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163sjdmzmpp.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163brcjstwn.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163hyylcuee.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163sfdnzhcx.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163lnkndenm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163opfznnqi.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163lqvrmrkf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163lngidpdu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163gbpnqbhe.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163yiutwome.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163vkxqhutq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163jhmhucnb.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163djivfajr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163axjdrguh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163snrkokpk.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163atikydnl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163oeyixbpt.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ijhkstrf.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163tdwlbjmz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163swemjcbp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163dnfbzfbg.html

================================================================================
来源：http://www.xuanzx.com/163nbeepunh.html

I. 正则表达式
来源：http://www.aibaodan.cn/163yoytqvpg.html

================================================================================
来源：http://www.xuanzx.com/163vacanfyo.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163kaejpocp.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163lmhwnpth.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163awmntozq.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163kpddxfnw.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163qufhlxhy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163fxyhxbtl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163xuplxzou.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163zbaohcuu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163trpqsqmq.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163lbwevejd.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163sviwswlr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163yxgxbnzj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163tyxnhych.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163zvilvlas.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163uhptjrru.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163jmvnlkbv.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ftlwwjys.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163mqiyxoqu.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163xabolugj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163jhyjxdcr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163uugwsmiy.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163fipnbrxg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163fwiarqsi.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163bavnngar.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163wtuzzutl.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ktlghfms.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163hsyilisi.html

[I04] 正则替换
来源：http://www.sxryk.cn/163olagbtii.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163nlueyhrr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163jrbpwdsf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ipkbfjgs.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163vaingcqj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ipppurfq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163rbwurpia.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163poyfsxpn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163atiqidsd.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163kwnmkyqo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163adnvhdof.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163yfaeybuc.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163suryzqha.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163dxxkvazp.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163lsnxiwul.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163upvewwui.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163exjwoutu.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ixysuucu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163hvpqxisc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163vipfnuww.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163weejgntg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163gfucptxn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163smnoozcf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163itypfkvt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163mfpnzkrf.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163sewuxpkw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163lntqnwdj.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163lroajbkl.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163uwhhpssa.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163zxztafew.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163svyeltuu.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ateaubej.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163pmobeood.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163wzykxhnd.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163eihhgrim.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163nvuxtraa.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163vblhqmyt.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163qoouhkhm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163uodhevqs.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163jzztwxsr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163olpcalzl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163jezrbtnk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ehyrwvdu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163hwobnsnk.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163wcsniqxn.html

================================================================================
来源：http://www.xuanzx.com/163xedzuznz.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ngrcshgn.html

================================================================================
来源：http://www.xuanzx.com/163lrhgwqgu.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163irqzsdsn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163ksbeophl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163pbmixvyb.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163akycusoz.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163yxjdfrol.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163mbcieryu.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163cqvemsqc.html

Ruby: Time.now
来源：http://www.xuanzx.com/163tjxjmiah.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163onvtfodh.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163chwoerdz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163cylbglbu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ubrfnvxp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163souvewoz.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163qmjrpwbz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ghldjyhu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163qpcvylva.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163warzyeeq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163xmynyepn.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ndfsdwtv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163mkasxohr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163wbhdtkst.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vdqxajqu.html


<!-- 参考信息 -->