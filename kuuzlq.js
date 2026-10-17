外链999!wailian999！

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163nectuvza.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163vokuogcp.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163tztoosyl.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163jjdbcwwx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163qtjshzzn.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163jnvzvmga.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163ubayyvrx.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163hbmrtnyn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163obmmhpcc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163pqdvrhub.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163oxcqrjqo.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ttxubswc.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163szactzcv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163mclktgwk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163htjizpzg.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163grgckiic.html

[G10] 访问控制
来源：http://www.sxryk.cn/163haijhwiu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163wbcpauoi.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163tmfplpss.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163uxeoiluh.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163cxelydml.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163wqfsxcqt.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163enxllslq.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163qnbdmoxq.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163uvrikvrc.html

[G11] getter / setter
来源：http://www.sxryk.cn/163uhnwggvg.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163geaestzm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163myegsqhw.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163xbszowys.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163tnsbegcd.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163rnzteupl.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163pwgkijlz.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163bkgkyijj.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163wkohvglt.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163apxzombt.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163hhksygmz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163axqeqiaf.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163utupsznj.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163kellpqmo.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163dzchihyu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163mtncllxd.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ddrhtdwn.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163shpyoyjs.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163mudhdglq.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ursefiyf.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ijryeduu.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163yduzfslq.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163kjbwfciq.html

Java: u instanceof User
来源：http://www.sxryk.cn/163msuvzbcz.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163monxxefo.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163bsqdpaqe.html

C#:   u is User
来源：http://www.xuanzx.com/163zdanzmpa.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163fffcwvxf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163udnyfqnj.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163gqtdouez.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163lggvadqi.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163gxxiyggs.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163lyebbcaf.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163juplsmng.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163hyqjjgvd.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163plfcwpid.html

[G15] 枚举
来源：http://www.xuanzx.com/163adtlnuap.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163tshzwuxh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163uqtpgxeo.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163sfexqpsx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163lzrwgkdd.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163lnngywvt.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163sbcuyzmk.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163chiknzon.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163nwccvxkk.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163xksevepc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163diufqbjo.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ntjaxulm.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ekngfgxn.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163cgwjiqbw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163qudbnscs.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163moiywxow.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163vgkzkaar.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163vwetlxmm.html

================================================================================
来源：http://www.aibaodan.cn/163nlokkdvj.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163fgtsmbex.html

================================================================================
来源：http://www.aibaodan.cn/163idqmbugl.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163xlgicvqf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163zeiskash.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163vpqoaeqi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ezqpljew.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163xbilchmf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163sqksuxee.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163subaeczl.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163tinzgpnc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163nvouievw.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163rtmsdmwi.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163zsdchkbs.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uzhaynjn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cugkpskx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qmjbpjsc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ortwgukp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163pinkmbgd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ymeabmdl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163seavidzv.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163cuzeexxv.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163gctotlzd.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163pgjijcpt.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163xedszfzf.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163uwgpnqyv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163vamsgtau.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163dsgsiwmr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163bepenpbp.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dokarals.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163pdqpzbcd.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ddkkpcez.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163drosvhrx.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163nqenofxs.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ednmlsec.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163zokbendd.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163oiuwireb.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163zidrgftu.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ebhzbaaq.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163okdkpgqm.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163etgezvif.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163carvcdgn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rqhdcqdy.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163qootugmu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163toopmqxt.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ylagjyjl.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ukbubqka.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163avlljipo.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163ngxuqdwd.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163tmdmqprc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163igvzkoad.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163qbvpleun.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163zedarkjn.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163lkvrnxhu.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163tqmtvfhh.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ipdxgcho.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163lggpfsvf.html

[H07] 断言
来源：http://www.aibaodan.cn/163pgblnzgf.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163mooozlgr.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163wtywioxw.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jrifcrcq.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163hsfrqdxj.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ogomgntj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163rntwyesv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163bvbphuvm.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163pezthbbs.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163etnybjkr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163scuujnom.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163vaufrfyp.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163unlgfepi.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163korgohsr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163nyxkyvqo.html

Go:   err.Error()
来源：http://www.xuanzx.com/163gwtsulfi.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163kkuxrzmi.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163fbjlzoka.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ldlneadj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163oqztxeiv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163dmkznrzj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163grfentye.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163azcqyglt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ueansdif.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163lnavnqva.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ipscvcgv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ofltazei.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163rakkqzpr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163pxuerwir.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163kopgswcf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163rukkcrei.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163cdfqhdfl.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163axksjajo.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163fhanglow.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163qicfisrc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ojpzwpyg.html

================================================================================
来源：http://www.sxryk.cn/163wwthzosd.html

I. 正则表达式
来源：http://www.xuanzx.com/163ilztcosw.html

================================================================================
来源：http://www.aibaodan.cn/163ovddiscb.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163rimzpcmd.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163bcgjexym.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163efuxkbjy.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163fzwntvfx.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ndkryxcs.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163vghzfuse.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163hitzeuua.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163sisjyitk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163fjcsonvl.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163zwmnahrp.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163dvvbhgee.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163mobggufo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163vmvmrelp.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163lzvbuaus.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163jvyfdsxy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163lrnqqnso.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163vkorpcfg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163dnhpaxqa.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163usyvctpz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163uqyzxmpy.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163laovlyew.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163tfqkowzf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163nsranjst.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163pmppkmdi.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163iakwhygx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163gycfckiy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163abmtsgyo.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163tkhfvone.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163nvsqxwzd.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163sovnwjvc.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qwkmuspl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163meuyrckr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163iqylbvye.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163cnmbvmbd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163nmwxysny.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163lduobgkr.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163mfshxfpy.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ruswzyyy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163vwnkxolw.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vimtrsvy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ieecklul.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163dtywcaxv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163eskzpvgd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mweablpm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163aiiwcpps.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163gegecqig.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ypxfgeva.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163qnkvaepe.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ozrmhldh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163vrpzgmar.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163lvgcfucx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163wootrnam.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163uxslpmah.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ggvojukz.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163ewyeulan.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163gzfrpxrv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ysjijkjz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163xnuamsxe.html

TS:   /error/gim
来源：http://www.xuanzx.com/163aqyrnxsg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163pomsivbd.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163gacarelj.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163diwpavmr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163xidlnaez.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163lbpcogre.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163zjcybhxf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163iblwucqf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163mrmxfecw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163qbnpokkf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163hqybncoi.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163vasgvoax.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163sukewzub.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163bdpjjmcp.html

================================================================================
来源：http://www.aibaodan.cn/163lfgeytdw.html

J. 日期与时间
来源：http://www.aibaodan.cn/163swptlnxn.html

================================================================================
来源：http://www.xuanzx.com/163hikcgffe.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163asbhjtnk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163jfkzojqs.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163nbemhjns.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163voapbvfi.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163cvxkqiig.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163qahdowht.html

Go:   time.Now()
来源：http://www.sxryk.cn/163lmxxisml.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163gvdhqrlt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163qulpkldh.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163zpyuvlpy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163mpphvtpj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163dgqoezpj.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163txuejkpi.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163dokwfdll.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163gewyctmy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163vntykmkn.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163kznzxhjv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163zxiyphtq.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163clfzzorf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163dsiaqztm.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163tyehvvig.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163tjhqxeax.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qmuvknbn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163tarxeqgk.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163kzafvsqa.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163pqbwdpvr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163qvqpcelw.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163vqymvnid.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163kidoysqy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163jfxmnrcn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163rtuynqqo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163mymzcvjl.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163lhahrzcu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163agmuyfjg.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163juborkti.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163kttlowgf.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163uovoysrs.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163zyofbsmu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163wxgaizag.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wspcsuwk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tejbpuve.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163nqfhfbhq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163gypobobv.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163arzbewaw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163trqeuacd.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163bqmxablu.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163jzdqtbus.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163eltyduhx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163gempxhkd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163iqismqaa.html


<!-- 参考信息 -->