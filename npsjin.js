外链999!wailian999！

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163mtvbcdwq.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163dsvixttx.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163hlrynjvv.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163qtpcwtyy.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163dzwdzayu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163ybsrizzr.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163tzfpfrqs.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163mvivcfzj.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163yfedgnnb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163zuiubozn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163wtujectu.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163xhejcdut.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163womgvguc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163lduxwruw.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163jsfyvstz.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163pzjtneof.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163bqfgyrpj.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163nypqgoua.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163uugjsybl.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163qyawsvir.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163mmptseyn.html

[G11] getter / setter
来源：http://www.sxryk.cn/163ianniupl.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163arajiowx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163opeprowr.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163wnqxozqj.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163varokdkx.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163iovszpsf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163xwegitvk.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ecdxdfwn.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163ehfirrjr.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163dvfxqkfh.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163rbrutgfe.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163mnflxkls.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163udtnymka.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ejwrtmap.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163fflldhmu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163oeczjtyi.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163kifpttub.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163hzfwfwrd.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163bqfggpol.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163arbrfkpg.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163eanlbwpe.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163hnduexgx.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163shrgzgej.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163xlkrbwkd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163diidgnap.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163vkdeyatn.html

C#:   u is User
来源：http://www.xuanzx.com/163zizxflka.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163bjihtjdk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163hgorwpdy.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163duyjmvcf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163dakyaxgu.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163qufxpahq.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163mvekfvbs.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163yyhqskdn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163scftggbb.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163cqyxaaok.html

[G15] 枚举
来源：http://www.xuanzx.com/163dzflupdv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163cfglvsle.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163cabiczvh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163fiqaclyv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ovslhjgd.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163vrtxceyj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163earelpmp.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163yzkbsxhl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163waxmdcui.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163kyzzekxg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163bslhwsqz.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163dhwxunvt.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163nsciekda.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163uocwxecq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163yxxgdcbc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163jgjvnxjt.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163umusryqy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ocpwsqvq.html

================================================================================
来源：http://www.aibaodan.cn/163yllsdzhr.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163wmxgcwml.html

================================================================================
来源：http://www.xuanzx.com/163ejbhpnpn.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ibnafron.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163zrhrrval.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163fcdwkuph.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163bovnvdun.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163zlxsigwl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163tkxsbmpc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163dqskqlmy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163iyqngzrx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163bgsnzlzy.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163tjqdewwe.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163swnjldmm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163usrkbjiu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wzkedjpv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163amwsglym.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163divocmsk.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163bngxirws.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163nhlksuss.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163lyvryihk.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163bgzdlidb.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163lhohzxxh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163fksqjxgn.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163gvnbhgno.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163gtibwrdr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163shbtxcwr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163jccwqbss.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163cgjjsdeg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ekbccgfj.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163wnylikwt.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163wilkqkwb.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163gaohutxg.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163qhtipoiz.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163kanusgri.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163qaczovxm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163ozselwas.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163exrvvroa.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163bxbueghl.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163uodvxthw.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ykfeaedx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163totlqzhq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163eozsczto.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163whuxaigg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163eyctrxfx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163jkhucndo.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163qluqlndw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163hpdlspbx.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163swxstvsa.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163ublyhvuf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163jaruxptl.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163sefyckra.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163nbiqotev.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163jiyglxzz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163qrrhwzfu.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163seugwjvg.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ubgyviqi.html

[H07] 断言
来源：http://www.sxryk.cn/163qpoggmtf.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163hxpqdofx.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163nxisburk.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163iakhhyjn.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163vlpbgnnp.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163putcgrds.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163ahleyhzz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163pyswxwqe.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ilrendbv.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163kaffxunk.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163jtrmeavd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163nrbcnzys.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163zdttwhdv.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163lnaoxkhm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ucuxwtnx.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163mmaxkiym.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163jzlkhrxb.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163kiunnqsq.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163prjtawps.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163lndkclpm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163wkufztcf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163yodokxao.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163vfczflnx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163mxhmqkaq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163qvwpbtep.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163aqxfopln.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163duwuvadt.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163zbzuzeat.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ssfzttpv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163weybybey.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bpbafmnj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vfkfkcwc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ahqbupnx.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163azqmyjwt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163ejulbkhd.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163hkhyyjrb.html

================================================================================
来源：http://www.aibaodan.cn/163nlzaeive.html

I. 正则表达式
来源：http://www.xuanzx.com/163eplcoxlp.html

================================================================================
来源：http://www.sxryk.cn/163ndidydpf.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163rxoxfbhs.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163xjithhrh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163grufouia.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163syfpgsge.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163welafqhc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163otuusirh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163iufvhuea.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163txldtccu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163kpxpjjzb.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163sdhwszsg.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163xqjuvpac.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163sburjlvw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ukngszhd.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163slwkgqli.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163qbqldgdw.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ftrncroh.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163tfdnvoob.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163woeykkof.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163tzgdoahq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163rgvtsiuv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163tnuohfnk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163gnuesnws.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163pmskvgkl.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163rdfkiuug.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163dhxmubla.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ksfhrnae.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163wxacsodb.html

[I04] 正则替换
来源：http://www.xuanzx.com/163wkzwmzlj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163doebmpkg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163wwiyktyt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163rflgsmvb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ffviurnr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163buuenfoe.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163snotpgnx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163wpdslhio.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163wnpcjqcv.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163dqauqpjo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163fuxijjov.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163bwmfozzc.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rkiknkgg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163sbbsskgf.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163dypnoqhq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163zmyksvey.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163pywtnwyw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163nmcvidwi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163eglmmqap.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163cguceggs.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163spvbjtxc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163yatfjbqx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163uoyykdwa.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163zdjkhmeb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163uejipjaa.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163qkghcxmo.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163sqocwfic.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163wdywpmda.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ymgflyvj.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163achjhpne.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163jtkpigjs.html

TS:   /error/gim
来源：http://www.xuanzx.com/163uaocuzyc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163nkbdiguc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163sgchjliw.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163fgwizkng.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163nnvvgams.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163kjuryqsq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163mpeyaqko.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163cekczqhu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163tqjhaqws.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wpryskaw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163pifjcrhw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163mzafsrox.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163qbdzxmmr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163zvuzjyxs.html

================================================================================
来源：http://www.aibaodan.cn/163esqtpcly.html

J. 日期与时间
来源：http://www.sxryk.cn/163hwfqvsqc.html

================================================================================
来源：http://www.xuanzx.com/163wqaomryq.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163wuzkxajm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163mzrcfngd.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163cjncbvdo.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163viveutks.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tazagizr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163btclfviv.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163suizkidf.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163hjsydnim.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163purxvqvg.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163jgfeqomb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xybtcjuh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163kzmhlepx.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ityfbjfr.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ljleoyhj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163sxsplkty.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163vvwwxsuw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163liboaonj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163xsneaqyc.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163tvoxapwz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163wmwvxdmm.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163vyrkyrvb.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wqfadobd.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163widozenv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163leessveo.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ixrcfwsg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163pxbpaplo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163yborlvyc.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163bptdrovi.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163aytofnpv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ckatzxet.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163qegxdefs.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163uwvgzsew.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163cevhsfgy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163eurmopjn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163zbbnyelv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163jnghbsro.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ezvaffxx.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163tzcnnqyc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163xjrzqzea.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163brmmyukm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163tvogldlx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ogwpnapx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ouuucvlc.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163cmcswpzj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163adtcxyos.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163lphhilyo.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163vudshcat.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163cbassvwv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163wkkxqqlm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ufvkiked.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163zyphwzcv.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163whjoxedf.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163kineieir.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163kzlkzxju.html


<!-- 参考信息 -->