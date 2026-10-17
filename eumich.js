外链999!wailian999！

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163swxshyme.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163xkhkeyqb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163wfinwiee.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163vypyyqqn.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ltbpnwtm.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163zfglvikv.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ftcrnpus.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163pkyxynbg.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163jabzagtl.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163tircluyk.html

Java: super.greet();
来源：http://www.aibaodan.cn/163qiwfnein.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163kygniufj.html

Ruby: super
来源：http://www.aibaodan.cn/163ozngcefm.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163sdlsiqfq.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ecudliqb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163vsuotlrv.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163jejjannn.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163uzznfqvw.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163rhvvemng.html

Java: static void f() {}
来源：http://www.xuanzx.com/163lkupmzum.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163gwrhljke.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163lvremtie.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163wreujsqk.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163zmpeempz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163rimuvsst.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163gbgkaivv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163zthlewmy.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163jwkfnevq.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163rgwxcxvq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163yeupudun.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163vocahikd.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163jmvpkyyr.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ztyoiwvg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163yhddkkpp.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163vaioznbm.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163kqlsbxie.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163dupmdeem.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163eoymvhqh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163eymmjeee.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163gqtsupxm.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ukhdizvk.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163jcpjoemu.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ouootphv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rzxssspm.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163msuluozx.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ujmxivlm.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163cpwqtjbb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163fdzmnthy.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163djszphno.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163cpjnggls.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163gowixajz.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163dczrvwrs.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163nnctarme.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163mculuzef.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163jajowima.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163emcfksvd.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163xjbokofz.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163haiokpij.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163koakucyv.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163qwbzvygy.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163utvyklqd.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163qtplsrdy.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163rpucmdko.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163odtiyldl.html

Java: u instanceof User
来源：http://www.sxryk.cn/163umacqoeo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163qqwklwvd.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163nhxhxujp.html

C#:   u is User
来源：http://www.aibaodan.cn/163dmabtwzb.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163cvcakygg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163vbgjcqmo.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163qnzgqoje.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163jxqkletg.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163yiyqhkbf.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163efxctkbu.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163hypyivlm.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163hyaodvyj.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163cxcqwdey.html

[G15] 枚举
来源：http://www.xuanzx.com/163fdgnhorn.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163qndkubnd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163crsnghho.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163bvklvfyh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163gxnfoclw.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163vfrkpnap.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163rrzamtqt.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163odslgxkb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163yjzxzuxz.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163otdnkrha.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ijpirpnj.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163yomcsszq.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163kncpmnnz.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163mpnvoykk.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163nzyteonp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163mlbsghtc.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163xypgvoeq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163syjwrmwc.html

================================================================================
来源：http://www.sxryk.cn/163orqxguag.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ggrdoxfp.html

================================================================================
来源：http://www.xuanzx.com/163qhvufhuy.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163jydfzetp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163xjnxnptt.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163kjxltjos.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163mfbhbfee.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163frfnxuhz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163knytoncn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163uqcoovqo.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163vwqsbmzk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163glazwden.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163cxhcrbsj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163wznbszac.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dulnlhmc.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ztjdmsdu.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kwzfkwwf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163olyrgzfv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163grwdsrtn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163gqmwpqbi.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163vgchpjzf.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163mrtnikwt.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163jowerjod.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163bmlpqsaq.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ffzrdpub.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ivxyktdw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163yjujrbkd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163cixaiyho.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163kxzhkvsj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163hrtkqghs.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163shbdsbhf.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163scfmjymj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163bkmikdnx.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163jzrobnhf.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163bmvgbqzh.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163hpypyyst.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163vzscidqw.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163qpifvosd.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163xwapjhwa.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163vqgwzwgh.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163aodudkdn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163cpkzsewv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163bnjsskyy.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163hixwitku.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163rywokbuk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163chyznxsg.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163xkebwzlg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163yoqorpsp.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163iphnhmje.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163mbvkbqcd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163tewnpuip.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163cxegakog.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163woeiiiuw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163pfgftlel.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163raoxklpt.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163oitrvwhe.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163fmeafzez.html

[H07] 断言
来源：http://www.sxryk.cn/163cmpqvqkv.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163gvhdtbkk.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163zzvjlfev.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163imkoalvw.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163aemqpjqo.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163xdcgfcmd.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163xnnlyubr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163jgwvbsjy.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163mqtbevwj.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163vuedguse.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ytlkmaib.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163dvqjfbam.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163lpowjict.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163dvomavji.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163mxthyrcl.html

Go:   err.Error()
来源：http://www.xuanzx.com/163bvhywsay.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163uusstabo.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163bxqytunv.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163dtmebqah.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163czytlily.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163yjgrhnor.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163izvrycmh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163jfthrvhj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163mzcvoeus.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ddjwbdzd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ahtgkohg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163wzymmvuj.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163hikutxws.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163tnoejdae.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163mhjxciep.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163cgvualfj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163airnylwr.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163wnnytayp.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163uqpxompg.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163cssdgeld.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163yropmszd.html

================================================================================
来源：http://www.xuanzx.com/163sxzlbdop.html

I. 正则表达式
来源：http://www.xuanzx.com/163ueayrzml.html

================================================================================
来源：http://www.aibaodan.cn/163ocdlojjo.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163cuoqoerw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163pskpwrnp.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163tlssgywp.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163hndhxghs.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163rsrnknro.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163uckgsrzi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163hatfxfvk.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ukrbidsj.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163xwrkmhhw.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163chxrmhwv.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163glwudqwb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163qycpztpt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163gfhyjgwa.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163zdqiodtg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163tisgrdjg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163njtyavts.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163lenpciip.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163talidsxv.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163wyaweort.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ruashhjg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163jpayixju.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163amkzduwh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163mfriokep.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163kgtpnatr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163omrmzakx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163hkvvhsrz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163bgckkkbh.html

[I04] 正则替换
来源：http://www.sxryk.cn/163skfumwcv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163tuwwfnsv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163lwhcvuoo.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163rakfvlzs.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163isnqvjnl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163dkfafbtp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163qduxjxdu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163tsypwpwc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163vkjgxszn.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163hzbsmgom.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163juzsnrsx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163blpvpobw.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hrgfhqae.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163uphoejlh.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163xlvgvnge.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163bwavwsfk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163idvjrrcs.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163qqpxbplj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ashgksnm.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163fszbzdck.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163hohvpdqn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163mcnsosmh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163fknzfxkf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163fnwhuwwj.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163zcimzxbh.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163xbnycezq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163flpgoaik.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163crojpdyd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163njphmnxu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163idwwatjs.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163nhrsdase.html

TS:   /error/gim
来源：http://www.sxryk.cn/163vionzkxj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163zgcjqrnw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163qcnjtslz.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163cgolkqgy.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163ikdztnvf.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163fjktqcef.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163goyumksr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163tfrxmmen.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163rmrmttze.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163yngnvyww.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163khcpyqua.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163djermwyf.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163nuqztxwb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163czwnurpp.html

================================================================================
来源：http://www.sxryk.cn/163blgruivy.html

J. 日期与时间
来源：http://www.sxryk.cn/163ppqhkaas.html

================================================================================
来源：http://www.aibaodan.cn/163bbrxfuse.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163irqtyras.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163bctqbxha.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163rwfwcxyb.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qyxhjqyd.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163kasabeaz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163gamhqero.html

Go:   time.Now()
来源：http://www.xuanzx.com/163nrailuog.html

Ruby: Time.now
来源：http://www.sxryk.cn/163pivczbhz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qjxoibou.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ueesnkpy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163pcfryxcr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163nvdzbhnz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163jyjjumvj.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163rbkgnirp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163gyqmgblu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163pskcorml.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wynrvrgk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163gignixsu.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163gpeflvbc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ojfghatw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163jynswbop.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163hdmnrbfq.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163wflojhrb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163pmvbrxju.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163fvxawawi.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163bepahwdc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163iwghyeek.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163nqdtuppi.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163htdfmugl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163npodkpof.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163qegwkket.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163hyahqumo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163bejmckbs.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163xplifast.html


<!-- 参考信息 -->