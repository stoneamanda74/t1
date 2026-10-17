外链999!wailian999！

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163umnkpeyy.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163asehuevo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ytwcitpl.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163bkklcccu.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163flavgrur.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163fixcsmws.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163dmtzbkzv.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163fidhdswv.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163vaxmapjg.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163iwkcxqua.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163uugnygcq.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163dvtkgokg.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163sqpetevn.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163uscwgwks.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ihwqgowh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163juozaudm.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163zyqirbet.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163byoombbd.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163falmflvz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163pfiaoube.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163yeawpwus.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ptzptjpn.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163qbctvnom.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163xtnronye.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163vxsrhdcn.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163vbvcysou.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163qafirwkn.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163xqyuydvu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163lpfqbbcd.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ekxwqkwt.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163dtobfnqv.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163vckpduge.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ajmbeoxz.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163jtlxurmt.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163lfjhexnm.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163bqgplgus.html

Java: u instanceof User
来源：http://www.xuanzx.com/163tuggeslk.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163umcacqqx.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163vfjzmagm.html

C#:   u is User
来源：http://www.xuanzx.com/163mllmrawb.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163hkdxkcxm.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ucacxmvb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163doknbaey.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163lwopkedf.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163hmuvutfx.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163wjdpycrl.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ejatogif.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163tsatrtxb.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163gtdfwdes.html

[G15] 枚举
来源：http://www.xuanzx.com/163svxwvzqx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163oswftalj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163qoefpeqv.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163girzcyiz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bmbzbenj.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163glktofht.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163sdgkddrl.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163sjtszrrh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163sannsqqj.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163sgddbqzk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163gfwojiyl.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163yavmbizg.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163gedhqhvd.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163sqslsmfg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163rkqdantj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163wzsprwdx.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163mzycdslq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163iqoemxsy.html

================================================================================
来源：http://www.aibaodan.cn/163dtuqitdc.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ztkdjxdo.html

================================================================================
来源：http://www.xuanzx.com/163ltjgulnd.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163cwidmiwp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163gjjycuck.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163trlsircu.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163wqqlkmzg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163izmrqzxf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163tkcemilb.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ocbusifs.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163qafxzcor.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ciflnfvo.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163nmwsihcx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163wmdafnzi.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ncptaubz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163njxuvvys.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vnzinhds.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163sqwzftvg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163stigsncv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163acsystnc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163lfpnnwou.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163axrbapjw.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163biobcfat.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163sgefklpl.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163yshclzsk.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lpsywmrj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163hdajivzt.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163mkomnonk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163nvxbephn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163sqptrtky.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163blkbtblo.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163zbaykogq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163dbhuyqxv.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163gfpbjrjy.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163vzsmmwrg.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163rmqgxufg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163bquzlkqk.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163nzmisrgd.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ptbtpfxj.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163bvdkpyjp.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163zhqxilwl.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163pobnkqvt.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163gslurmqc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163peskzfli.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163osgtrfta.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163vclmbipu.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163spygoeha.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163wbgihdhj.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ginciaib.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163cqpylfqc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163jslaatuk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163pbthiyfp.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ntsgamki.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163vqhzfjkn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163xynvagyo.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ysmyakcm.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163hibynfot.html

[H07] 断言
来源：http://www.xuanzx.com/163gesshgme.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163iubplxyj.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ehahmuzi.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163uouuzmkf.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163usjeoqsj.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163unwbyfas.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163qmmkfxkv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163xwbzjslu.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163xervtoaq.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163estzeqbh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163poosfdhj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163xyvzkoqp.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163vnxekuks.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163mefbdjba.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163lrwadgwq.html

Go:   err.Error()
来源：http://www.xuanzx.com/163qogfjwdx.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163twexsejp.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163dyxrwrhc.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ajxlgdve.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163buedonfh.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163wxgdskec.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163nyynlewn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163yuibqdix.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163nwxqdnwc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163pyondphx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163plnbssly.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163bjeopjuz.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163famfhrax.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163wvrbzuua.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163nmjzmvra.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163hsezmewn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163nxkhzbke.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ecwjcfoq.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163nfyfqbyd.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163tijfqhbh.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163djkdupen.html

================================================================================
来源：http://www.xuanzx.com/163sgoraipy.html

I. 正则表达式
来源：http://www.xuanzx.com/163kpotmvsc.html

================================================================================
来源：http://www.xuanzx.com/163ehgodbzi.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163vihmkfjb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163iffumtrq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163tniaiqno.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163nxjgffmd.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163qfywacxp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163mcasijjd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163stjajgiu.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163krsvalbr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ntidtcoc.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163chbtmqcc.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163quosntxg.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ykqaoigr.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163rkthairf.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163lkrpjoow.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163aunrcotr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163xucgdcvd.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163njtwlzkk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163vlkzqgjv.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163tkpyzydn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163mbhrqzfy.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163iyuuysdf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163aoebpmzv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163zgxzyuew.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163rcrrtjbo.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163oizmsyjr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163jzjkuqod.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163lcewjabg.html

[I04] 正则替换
来源：http://www.xuanzx.com/163rfktpbyk.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163azzjllsf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163pbgfjzsa.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163pjaoxfnw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163bjvdzppz.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ckvmkqar.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163begtpwoj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163gmygytxm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163dokpkgnz.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ymffxkuf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163goashizl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ehjuteri.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nfhtdsmh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gpwyipew.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163nivrfkiv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163gehqiysw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ermvfntx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163epxshnha.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163tyixmief.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qrbobasb.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ulktfpvy.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163rsolwqes.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163wyemaxnn.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163wxiqbpzq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ggnlevfy.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163pvxrtesh.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163txkaxvvu.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163riuqzrue.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163glkjzsmx.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163xypbmxqr.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ydcoyndt.html

TS:   /error/gim
来源：http://www.sxryk.cn/163dbeofncl.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163evzstsrv.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163fjiadodt.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ocurhknb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163kqbuyaxt.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163dbogujtc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163grivlbwg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163gstweijw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163qjxsjigx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163yjbtchef.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163sntxfpud.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163fxlhnyfu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163glssvjgi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163souuynmn.html

================================================================================
来源：http://www.xuanzx.com/163cjizyxck.html

J. 日期与时间
来源：http://www.sxryk.cn/163kcrhejpw.html

================================================================================
来源：http://www.aibaodan.cn/163durwxyql.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163qeimaqey.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163bkgnhmik.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163rjohppvt.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dctvskzj.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163frbavnyu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163zdbrejfg.html

Go:   time.Now()
来源：http://www.xuanzx.com/163xcyqgzsp.html

Ruby: Time.now
来源：http://www.xuanzx.com/163qqyfqgwz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163vtsniagw.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163cbamdobu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wucxyhvd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163simureob.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163njjxjxne.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163fvphjtuj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163znquapby.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163givtwmik.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163imclyeko.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163amhwbwlq.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163zxnjgluq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163jojbpkgp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163sdgshnfx.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qdypzape.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163shmnzjbx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163wqelukkz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163xohqubgy.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163tulvgfkj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ebvbilqp.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163zemzpggt.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163tentjkel.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163fkcymspn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163wcmhjxwx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163lbijuevr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163zymewgdi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163zsxiaron.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163wtndpiqw.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163bormzjro.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163mqfsblyp.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163rznwekxi.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163rbmzfubc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163emldtlue.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163xkotvvhu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ydhyhonz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163xdausraj.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163lyyjprmi.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163aiedvrgw.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163jhynxqre.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163xalunwdo.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163bimjxscb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163zdbpkwbl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163jcbqexod.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163pzhkwqoe.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163nsiuktfs.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163gcpevnck.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163tqbuvbbb.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163rhrqxdfi.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jwqcvhti.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163cpvptvtu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163oiojjvwa.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163mymlcekg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163etmlgusu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163wdlvlfun.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163igavwnyx.html


<!-- 参考信息 -->