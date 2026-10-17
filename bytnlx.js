外链999!wailian999！

Ruby: super
来源：http://www.aibaodan.cn/163sasosahb.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163dhypvjtg.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ijcgpdyw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163hmvlxndl.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163vbggzkmq.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ymlkhcpy.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163tgceaerg.html

Java: static void f() {}
来源：http://www.xuanzx.com/163doygtvbb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163pxywqoee.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163exbkvvho.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163uonssuvo.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163rvmxbrjb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163llekwlpi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163rrhxdedy.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163hnuuonob.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163oacvbtev.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163hysjutyo.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163kjimxtdn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163csvzlmjm.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163kuetojsf.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ecsquumj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163hmyzahfq.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163dqxnvvxi.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163dxwdliye.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163mhcxybew.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163fdxpmfke.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163zsqtegmn.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163jbwspjqm.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163pttvkjiw.html

[G11] getter / setter
来源：http://www.xuanzx.com/163wayiyjrf.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163yrarovuc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163bdbkhghz.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163tpdsltwq.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163litbwrgx.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ytcdlose.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163gcvmgozu.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163abnlasvb.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163oozxotck.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163byxqrlww.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163mflxgrxf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163zmohfjht.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163zdnahhmr.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163qebmoagu.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163gpdgnbso.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163uhummelb.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163xookrevf.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163azzasoef.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163uqhpezzz.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163fyiyrmpr.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163znazarph.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163kddjauor.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163qjtekmcg.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163zlhjmkkp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163qauwvqei.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163nxvvqdwr.html

C#:   u is User
来源：http://www.sxryk.cn/163hujgmppb.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163dlkkuvaa.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163rimzgpgu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163zymovpcr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163yjxitnjy.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163rtrwqaue.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163bfyenvth.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163hgrqsdnn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163zzncdsrb.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163apavafpl.html

[G15] 枚举
来源：http://www.sxryk.cn/163uijstrbl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163hltzkiqp.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163kysuecuo.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163zvrjzxfz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163bpophvan.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163wenmatyn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163kzpszkry.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163lsknmzpx.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163gthavsgz.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163sracrwtz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163zjqffuge.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163lwvusczv.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163kgvgdegr.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dvzzgtqm.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163nrtlhukx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163jtimfknj.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163crgeoknj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163vhnwpvvy.html

================================================================================
来源：http://www.xuanzx.com/163lgfjdgdc.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163htyhthkr.html

================================================================================
来源：http://www.xuanzx.com/163sfnohkgi.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163aisznegf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163zpshnfak.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163krxmoxbr.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ukzeojke.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163jrbgahoa.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163khaltzcl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163nwlihcak.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163jgochsly.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163grtcnjht.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163mopibvfn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163wkzfqkfg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163laufnxfu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jesueqto.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mwoccqiw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rbopxcjp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163plzwnbpw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163epelfniu.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163gdkdygbv.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163wjwoffyf.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163ureuxcjo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163tlqibzdp.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163leuasxdu.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163reyqbbcs.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bijjelmj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163jnnpfvqj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163hljkspzg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wvalxvsh.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163rwkeyhxd.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163bburkcge.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163hetrimhd.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163fqdqhanu.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zcqkqeej.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163bqhdcqly.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163qsktuvfm.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163qijdwwqf.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163bumdjgsg.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163tsyqqpbb.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163kyaooobq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163lnpdnbyr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163bzwvetwu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163qmlmolph.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163cimiqfck.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163eqnvjxfq.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163jdqaexme.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163itrffqec.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163gjrnfxcj.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163pnlyqpuw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163sjirgqrg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163eqxwsxuw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163bbzxmzrx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163pxnnlxub.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163htipjsru.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163pzftbkzn.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163catixhnv.html

[H07] 断言
来源：http://www.aibaodan.cn/163ckhegxwv.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163asvgnygy.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163wrqdzakf.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163hpznecqd.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lpzaorze.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ecwhplaq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163ejuanind.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163iomyjrtg.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163payhvahf.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163tqsmxykx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163mipvmlzl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ittwzwmx.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163dgfhefxu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163reukbzvx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163apsypfju.html

Go:   err.Error()
来源：http://www.xuanzx.com/163ncucjkto.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163eoazfruh.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163qttvpvgv.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163gucyvsro.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163sfggbwew.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163sntlvnqk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163afyebypn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163otvnqgml.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163xwrigzln.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163guuguvvn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163xkyayguv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163whzjbeeo.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163hmyxhgzk.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163cinsdbfv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163qihlepay.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vywkqfwq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163cmqxqdms.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163zowwyamd.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163kwwayiae.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163wjkqwwxj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163mkzxjvss.html

================================================================================
来源：http://www.aibaodan.cn/163zwbwtsxc.html

I. 正则表达式
来源：http://www.aibaodan.cn/163ikuibvlo.html

================================================================================
来源：http://www.aibaodan.cn/163ccfihezt.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163psmjnjip.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163iuqqglfx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163yrzprnff.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163duyfhpky.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163osvuawbq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163rxyvopaa.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163zmtqijag.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163aekspkdi.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ojxocnah.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163zvqasmks.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163axodzafu.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163cruybxpm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163swctqqcn.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163aspiounr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ainoyrmk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163keryegwf.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ilfcfqcx.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163akmstqad.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163comiwxpa.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163jfhhsgyi.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163vxkalbol.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163zaxwjwgv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163lwuvkzbt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163mcbskgle.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163ouvxeqnv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163wroakuzn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ofsejuxm.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163zfcdqlnv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163wfohutfe.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163wxoykwir.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163wodjhbnq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163nuuwavkh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163nuxtllyy.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163ptusilaj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163urwzrmnn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163zhcnmgme.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163wsjfeopk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163mhlspuzv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163offsuvhy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ipsngrxf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sqegybyl.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163ttkpqdag.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163wpfswxrv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ocegquie.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163asyvqcyb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163bawoffht.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163fnruvnrt.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163meqkxgug.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163yrotjfiw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163rdeeeebm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163fdslnorr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163dkskkujh.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163hrjsfheg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163cvgghjqr.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163kqokashk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163odrhpfan.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163fiyvfjhn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163xzbpwyjy.html

TS:   /error/gim
来源：http://www.xuanzx.com/163gkrbtbal.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163xgcftfco.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163uoackvgz.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163qinmcvgn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163tyhtfpmx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163lglccxhx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163rxqitlmq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163xddmzmjg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ixpndbeh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163embsdcuj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163uoslemub.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163mpamtcgl.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163edxnykis.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163vxeshxoe.html

================================================================================
来源：http://www.sxryk.cn/163yggkmbai.html

J. 日期与时间
来源：http://www.xuanzx.com/163zvrsnbsi.html

================================================================================
来源：http://www.xuanzx.com/163kneoiwtq.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163qlmobgka.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163esqgdgwl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163bjbeovnt.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163trkcfmdf.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163okqqpxtb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163bnlgoits.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ljltbnug.html

Ruby: Time.now
来源：http://www.sxryk.cn/163hecqnoqi.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163fsaauple.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163maifvdbk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163mqcsiqzu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qgohwbed.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163akjcfksg.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163dawnvjar.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163uowrmrpx.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163zvqxkhca.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163smhcxxrh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163jxcfwzrx.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163krldqfcn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163wxoyiqxl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163xsiuyttx.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vdoksein.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163asfokcze.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163keebrnhi.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ojewzcse.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163aqaktjtj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ddcasfcr.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163dklntflu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163vtbzlzjv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ziersrxd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163gmseniyn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163yivseqoh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163xmwlfynp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163jjujolwv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163sfdxyylw.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163gzazctvv.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163shgcgwkq.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163bfxywcyk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163kmeunyia.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rgfhdqqg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163uswnsizj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163nrlbvabl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163niguoejs.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ujlymbmy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163joqqbwfw.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163gttlkaev.html


<!-- 参考信息 -->