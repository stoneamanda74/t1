外链999!wailian999！

JS:   super.greet();
来源：http://www.sxryk.cn/163pxxrcacp.html

TS:   super.greet();
来源：http://www.sxryk.cn/163czvigxfs.html

Java: super.greet();
来源：http://www.xuanzx.com/163btuqggak.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163ayuwqefy.html

Ruby: super
来源：http://www.xuanzx.com/163cttxzmew.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163dlwckyyh.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163nhdfbfkb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163bgzcwphj.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163wguyzbmt.html

JS:   static f() {}
来源：http://www.xuanzx.com/163cjegpkfy.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163gkvbiyuq.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ksfxjbaw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163aznjrdpd.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163xftptyyk.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163txqfrmkl.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163phemyfxy.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ozzumwzg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163ksffqesj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163othaucrt.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163dtcpydmh.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163eftmpnvi.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163guyxofph.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163zrpwfehd.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ixzyuuau.html

[G10] 访问控制
来源：http://www.xuanzx.com/163pxbqaovo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163wyeiznfz.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163ndpdsyth.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ptgwhzvg.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163qhodbpas.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163bhcbbetn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163qznfdsgj.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163jftmgzkp.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163vxenlrdt.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163odmvuxbd.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163fpckqjpm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163oimrjfnq.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163mzpmmpea.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163wutzpqer.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163pkhakugu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163suopdrpt.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163gzswbrnu.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163rkmsovwe.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163vvveajlw.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163cmcptjbr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163shnmoybw.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163kpwlxffp.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163cvdonjsm.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163bqtqedjp.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163rxxqhoio.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163bboefckx.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163sqrnqoyv.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163elhdyxcd.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163aybkcdzu.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163rbaxtzld.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163upfxdumo.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ojplipqo.html

Java: u instanceof User
来源：http://www.sxryk.cn/163rhrukeaj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163kuzwifmp.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163jlcrrlen.html

C#:   u is User
来源：http://www.aibaodan.cn/163aaxpttla.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163jbzwbexn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163auptjsuq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163wuoopvqo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163tbcbfgyy.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163iornzdzv.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163cecypbcp.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163qtudavfk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163eocpzuyh.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163xjzymyxt.html

[G15] 枚举
来源：http://www.aibaodan.cn/163zgavoaec.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163tgkcibfs.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163xjjnbiex.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163cezhgrqe.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ofkjqwno.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163genwwyij.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163lhgnxijl.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163lrcbedaw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163kzcwclij.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163emmdljoy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163daowwudt.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163lmxjhipn.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163gcfrpvkn.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163kqdczcug.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163jpbvgosj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163lkvbnnce.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163pizmqwsy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163olprkdpx.html

================================================================================
来源：http://www.sxryk.cn/163acwlsjlo.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163louuttam.html

================================================================================
来源：http://www.xuanzx.com/163eeiordxx.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163nyducrdi.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163uciheady.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163jtvorglc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jkbryfyi.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163dreheltv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163qqdwzmwe.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163txpcjrmz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163lgvvmxqb.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163kwmocrqp.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163tgzvrnqr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163rubabolp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hjalxsvd.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pethmzrv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kthytsyf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lcxezzip.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163uwzhaukc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163jezxqgzl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163itzlltju.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163fzvzyedz.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163hmrlakgm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163itpdrcju.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ahewyvik.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163dwipofzw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163kbmtxotd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163jtcjbxzw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163uiobejel.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fofngakz.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163quzwxrvf.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163oxzptnxk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163usfntpcp.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163daquuzkz.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163fcnpdviq.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163kupcfjdi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163tzgyekph.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163cijfofog.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163kuzgbusn.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163nveddbeg.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163gsrmgbqv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ksvwxlwx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ayfmbsyr.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rvllecwl.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ktyqigcp.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163twieilgh.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163hbrifgkw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163xoxetmki.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163xnapjmni.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163keoodaeo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163fqyuelxf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hdxvcebw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163wjhirgab.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163twupinpz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163cuscfzfg.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163oikpzthx.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163cwhhuncb.html

[H07] 断言
来源：http://www.aibaodan.cn/163emjqsvdn.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163sfzuqbti.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163kitwyudz.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163jcbxlujj.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ljdjqphu.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163kmfnxagw.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163hpwikmuc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163pqekxfww.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163tpmhrjrn.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163khwmlbri.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163sxvggzev.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163flctvija.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163fonfzalz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163vxhtlrpm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163vqamlmpf.html

Go:   err.Error()
来源：http://www.sxryk.cn/163fnxvzrsi.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ajdldxeq.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163gfvmghkc.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163sjyrzgwf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163qgjqbaca.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163osvlkztk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163vmdtclcg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163odaikkfu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163dnsidpoh.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163utrrtjlj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163lawmamrt.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163zmyerxoi.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163qjomopxx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163upqiyopj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163eolrgcmb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jkalhqee.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163cntkzbfd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163prlqwffg.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163bsknevov.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163dglaamjk.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163iiznzrtk.html

================================================================================
来源：http://www.sxryk.cn/163jiahciyt.html

I. 正则表达式
来源：http://www.aibaodan.cn/163rdwxlfad.html

================================================================================
来源：http://www.sxryk.cn/163jpdcasmk.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163vsvqiarg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163unmlxsso.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163gpwxqxew.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163glnuhvqx.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163aqcvaygo.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163nlwayodp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163puqqjbtw.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163zoyqchoz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163lfydzwdd.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163mqrvimrl.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163jzysuzfm.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163mpcziuut.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163vcnpxucm.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163edxvssts.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163bguvfrqv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ddoywtza.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163wqmfpxmq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163wfiizeat.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163rofdvmgc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163zcrloqma.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163rjquszky.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163dqydvhqn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163lnwvxdca.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163fqfgzvzg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163vxfyixqn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163lucktmcc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163qftgvvdh.html

[I04] 正则替换
来源：http://www.xuanzx.com/163emqjdckh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ddsccpap.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163casxmgcx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163nnapjbej.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163zdyualqr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163fsvmethx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163lrucgmge.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163dgxbjjcn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163iykgjkaa.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163timqsoeu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163xdfeunha.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163dsahbeup.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lutuqwrk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jxocpduo.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163yahxkako.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163drhtixud.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163bkpiribk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163qrcsmkgp.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163mtwzaoua.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163xpuzpwrd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163nymtvjyl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163zjtxxhph.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ifrngxgc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163hnifmref.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163qntxgzlc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163zuohlxhr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163bkaieign.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163otjhdlic.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163fiepetrk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163phvbrbhn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163hqkrbxuk.html

TS:   /error/gim
来源：http://www.sxryk.cn/163cqjwpont.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163vakqihlv.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163nfqscdec.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163axqlvioh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163mjapsnlh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163orsqtkxo.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163urikpxre.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163cknxiaby.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163kwndyqse.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163eyxflfiu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163oanfazbt.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163xexkgooc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163efularym.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163yaagqrmf.html

================================================================================
来源：http://www.sxryk.cn/163pjbgzqgi.html

J. 日期与时间
来源：http://www.xuanzx.com/163vsdqsjkw.html

================================================================================
来源：http://www.sxryk.cn/163pmmaflsa.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ofcnmaxo.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163gkobleao.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163kjwvglio.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bsciidyf.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dnsfpdrq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163icohfafp.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163iehplnap.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163rgosizpv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163yxjashwa.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163sfcxucev.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163guyhgowu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163yijnqyku.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163zsbrpeou.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163azrbqpqc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ptzeqaol.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163baqlaseo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163zyqtfrhc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163rtnvjyxw.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163nyejfrxp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163fxizmihk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163prcxcrcj.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163viuvdohu.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163teyeaqbw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163yzodligz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163rbydgqlh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163xdbzvmzx.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163xapwiyzp.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163tykdphpn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163senzgsrv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163nuhnjurr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163sdjibglq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163fpsvaxdq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163acoldgcu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163iyucfead.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163umtchfix.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163lbfchpxg.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163rrjbocpe.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163wpprdjqc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163joyuelvm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ygpqerbq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163amirihtb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163dbagvmeo.html


<!-- 参考信息 -->