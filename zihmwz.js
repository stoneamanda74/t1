外链999!wailian999！

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163lfuuedpj.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163oxxglqep.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163nrdbpciw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163cxtjpcmp.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163zpuosmkw.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163btkyuzex.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163wmygcvge.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163nxykezhe.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ivgngskw.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163rufywgvc.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163jqtmwaoi.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163uxlmkddb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163fnswtvid.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163ebunfztc.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163rmicqddr.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163plpgkjha.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163wdllyekh.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163yqnarppf.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163lgypwvgf.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163zuwkqvni.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163uotcfivj.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163qewnzyta.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163rzkoezvg.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163rxirhyvk.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163agvaqruw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163upwytpko.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163bsfdalmc.html

C#:   u is User
来源：http://www.aibaodan.cn/163jzdtlvim.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163rbqtcqey.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163vhbifplc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163njlrjjrg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163gbsbsbqx.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163utblrmds.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ebxjnlmm.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ahureyej.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163nereyqhw.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163kedczcdv.html

[G15] 枚举
来源：http://www.aibaodan.cn/163wkiwuusm.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163zgkwshkc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163xngnkyvz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163qxbazeij.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163cidakjfe.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163bovagpdh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163rhvvhqpb.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163opxznzyi.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163riidwlhh.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163wbqzniwu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163bjpmrjqh.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163zsnbdbvn.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163zjulyuie.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ifkcznse.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163jijhlgqo.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163rkvpnvgf.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163nqadvifr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163cstcrres.html

================================================================================
来源：http://www.aibaodan.cn/163tyzifdac.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163sxmztclh.html

================================================================================
来源：http://www.aibaodan.cn/163odisifxs.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163mnwnftrc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ykgdqljv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163isrxxles.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ymtpwomg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163jaojorkj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163lqnugpfi.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163gaauzmjw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163fpzvobki.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163zmvcsepb.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163hyxqfrpg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163dwhxmfln.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bwadjibk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163aqpfbbdn.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kuqmmpzj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163baclhxxs.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163lapxocds.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163qitmfesw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163fgsvuygn.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163jvapstqm.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163mdhvgsxv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163igraelnt.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163oorblrgj.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ucrpejhy.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163nqempfcb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163wcjwqxed.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163qmqkwcrs.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163movvukvu.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163dcgsbczn.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163yqjtovib.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ehvshwjp.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ifxuegdn.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wrbxxxua.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163jdrlfrfe.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163ilwlwmvq.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163jcaxiolk.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163cgyvdlod.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163nrcuubao.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163uzbmxqzn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ujwhwjzv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163oiwqghem.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ernfjefh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163zsudxptc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163dmqnonfp.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163syuyurra.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ztiiliih.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163usacahjx.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163ymymccye.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163abstbpnj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163fpaxjvsd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163whydmezd.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ilcydiba.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163qosyyuss.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163dmqqiyiv.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ywajmyqv.html

[H07] 断言
来源：http://www.xuanzx.com/163bnabfokc.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163yattwfad.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163hhrdsrrb.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163nbjeiguz.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163kojplqxj.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163oxvrddgp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163iwvxczsx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163dlzwxzno.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163yaqqjqcz.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163avlqxnpr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163gshppaio.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163pcoxnfbi.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163jimpglia.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163hmuwuyli.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163nanjxyra.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ijjkhneg.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163hjbqboys.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163ewtbclfl.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163xyxhyhiv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163zagxknzi.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163kukmhtrq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ytduprgi.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163shbzpoyj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163qgpqnhoq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163njzouwzw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163apwksuzq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163kvhepsxq.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163uzykbnyt.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163eyhjtzlp.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163xvxgtzqt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163sgdgfnoe.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163tidsznfl.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ymumzgcx.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163spadlcyl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163yyzbvrwg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163coftlxmz.html

================================================================================
来源：http://www.xuanzx.com/163qrdgewwn.html

I. 正则表达式
来源：http://www.aibaodan.cn/163bccbvwld.html

================================================================================
来源：http://www.aibaodan.cn/163rsoakzwh.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163srwzakbo.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163vkgsvadg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163pqrezgof.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163akgbyzgt.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163lpxlejri.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163hjdykltq.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163dedlgcty.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163gumdjcvt.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163sujqhivo.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163vmacbxjl.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163niazuhtu.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163xaazqasn.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163nlglweso.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163hoargbyo.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ahmosttt.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163adxxriun.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163esjibjsl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163udjjajgi.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163jzwkgtlr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163nozsnwxe.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163guwwushr.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163rkycljqx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163pzprqizt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ukfughnm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163hezxibyz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163skjijazb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163wqrzcyap.html

[I04] 正则替换
来源：http://www.xuanzx.com/163pbbrrwer.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163dqbrdcsk.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163pbmbmxby.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fakquqdz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163uxtpvhzh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163uxlvgrkm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163wacopajn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163pqrbtpsa.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163aqhigfnq.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163lbftuhgc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163epblozay.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163wobrcbnr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163wjvgpgms.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ziglaobs.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ugdwuxmi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163dujklcjm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163rqipbxqg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163dkumkyba.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163dfaqsezy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163shbnlhxj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163cuhkotlz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163yjvdurqv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163aomleilr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163zlraburv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163esbvbtlp.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163voiqfbou.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ibzsyykk.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163nolwfplh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163fzivoqbk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163iocpaptf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163nvpinpgx.html

TS:   /error/gim
来源：http://www.xuanzx.com/163behatcdn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163sxsfzgyh.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163fbihwniq.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ttkntisf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163deevkqpm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163oznekrou.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163dgmafbpd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163zynjyert.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163zfulinjt.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163snhgdpet.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163clhqmcoo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163mbsaeolh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163dryyflxv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163haqjjqwm.html

================================================================================
来源：http://www.sxryk.cn/163qypzlgxu.html

J. 日期与时间
来源：http://www.sxryk.cn/163noqotkbz.html

================================================================================
来源：http://www.xuanzx.com/163vxmnmdpp.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163iaunmxdp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163cgoyuhgz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163fbxsyacb.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163esjgbwiw.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163vjcqkbsn.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163sxvmnngy.html

Go:   time.Now()
来源：http://www.sxryk.cn/163eoqounln.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163vdsankbb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163xcfscitj.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163hfzkhioo.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163nowzpnpg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ywxkxdpv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163quofqisy.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163kxhbjglf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163hajuowin.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ldmpjsao.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163cevpanga.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163zuktzkzo.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163rfrcflmx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163thhjxdvp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163xwacrsvb.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163obyrhdvf.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163rgrllvop.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163hdnbduie.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163wowsgwam.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163dctcrkxw.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ntwgbuok.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163tlbxbtxq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163uqluisfj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163yjpdtltl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163abngwhmi.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163pkgldvhg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163zileujmc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163enihsjnv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163bjrfdoht.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163shkyisvj.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ykhjfcuc.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163jlqutlyu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ezpywopq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163mjwefgrl.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zawkabil.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163xejzjzmg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163aboatpoh.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163iiywrpdg.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163dkhibqwm.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ujktqyys.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163hfvgaorp.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163jnjwrpqv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ipuuonej.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163szpbsabg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163gzybaaat.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ajxrbrer.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163jjqsiblc.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163xrdatqry.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163npwbldkp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vlynxvdr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ctpozbmp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rtwepwga.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163lchhjiyi.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163tffakzxv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ojwdgtfh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163rosqcvct.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163sdtkkpze.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163uhazjrrr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163uytdgxdf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163usqqxtiy.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163zwvsvmvp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163cirptkzu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163nhkyntyg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163odqcpryq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163waetwsfd.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163yjgyevds.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163yljtfban.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163mvbzorxb.html


<!-- 参考信息 -->