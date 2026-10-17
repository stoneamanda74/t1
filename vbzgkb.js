外链999!wailian999！

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163natzlxwc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163xxgxwxix.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163wmweyvrh.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163mavhhydx.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163qdntplnp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163mpffmhhe.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163mxxowzcf.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163vehvtdrc.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163rjyqlsyg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163cgsiwugk.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163vlsriavp.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163inwzxiqp.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163chdaiilr.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163pcrkxpfj.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163yhkkosyh.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163anuqwfcd.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163cbmtzehd.html

[G11] getter / setter
来源：http://www.xuanzx.com/163cxgicvof.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163hmcxtqin.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163dhlxgjup.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163sxntvyzb.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163vzxkdoyx.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163hpairynn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163uvipnybs.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ecimktww.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163cndagkzv.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163vzunxumb.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163tkryryuv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163luzhojbm.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163olwgliax.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ttayrrwo.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163xcfebvxs.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163mdmeerxx.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163enzjtkot.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163hkcrgipm.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163aacvbjnk.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163igvxlvrb.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163pwnuuiar.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163pzcktlyq.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163wnkdiagg.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163xfetcgbe.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163lstxeiei.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163pilbicct.html

C#:   u is User
来源：http://www.aibaodan.cn/163csrzgffc.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163deynuimf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163jsbstwbu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163umdjebal.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ojzqccng.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163qbjbbzmk.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163djtxkfdg.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163gboeqeuw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163qdihdtom.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163cykpmpih.html

[G15] 枚举
来源：http://www.sxryk.cn/163zaptiehn.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163dsizpmng.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163pipijrgz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163kevzkgml.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163qzumpokz.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163qtyaqhmu.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163qqlxtpgc.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163tvwzwife.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163lbiscdvp.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163aswkpejj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163aooyerhk.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163bhtxcinr.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163tfeiptjz.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ysiyrnye.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163tajrassn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163jbhephwe.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163gwuuzlkf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163hjlzywoj.html

================================================================================
来源：http://www.sxryk.cn/163wrcavkfv.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163vmxgbhqq.html

================================================================================
来源：http://www.xuanzx.com/163hstusoqa.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163otzmfvnh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163fujkjoig.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163zzwgkgat.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qsbyzlly.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163mkferuam.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163sigenxsf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163bumuazcw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163mahlound.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163ndeynufz.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163wzcjiayx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163seaautdd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ofcmaeui.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163smdpiwgc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tylmzfyl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163daylbwks.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163irbonmdr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163sojdhqvw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163htjhvwub.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ntxcssez.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163nqqfecok.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163xtnvvvns.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zyvipvrx.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163damwdubj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163szozvhiy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163npjzdhjn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ppcsrkgh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fajjefuq.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163edgtbgwm.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163xirszgwq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163rezwmlrs.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163dtfaqizk.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163klnyswrs.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163mqtheaow.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163xmmcqswq.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163pokljtfu.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163xpmnmock.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163hufitxxi.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163kuuztrit.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163inmnxfvs.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163tarsxrti.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163lnrigbtv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163jemyhkke.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163bpbmcwev.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163yrguceiz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163parjvddn.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163qjiwanxo.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163zaxnexwq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163foardjgr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163qtbjqpef.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163jkowszfr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163zebwpnei.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163gcvgihtz.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163xvrwzrqk.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163nhtemmuh.html

[H07] 断言
来源：http://www.xuanzx.com/163uudnabxt.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163qzlyqfjf.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ghakbeuc.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163zqpxblkm.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jtvocsra.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163yjmliyrl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163mmujuvmy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ckaymkax.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163naptnzfv.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163romkyfht.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163judpleok.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163anmyquxx.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163bwksvasn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163jmjfdznh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163vvgyteqz.html

Go:   err.Error()
来源：http://www.xuanzx.com/163gzlwcraz.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163tmxdbhto.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163mqlppmto.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163fdryffmw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163bmyqxgbs.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163cllnvlik.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163sazvfxqj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163qaiwdsui.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163xcfblalk.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163wjtntlii.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163mkjolpez.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ktmxydeh.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163uvcxczon.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163pfbnyrjd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163abyvnpez.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rygbcwpa.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163rcfknhie.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163mieitzfs.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163bphnowgm.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163orvvtnhp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163xsnyoigz.html

================================================================================
来源：http://www.sxryk.cn/163ilzmylbi.html

I. 正则表达式
来源：http://www.aibaodan.cn/163hjjrllwf.html

================================================================================
来源：http://www.sxryk.cn/163urfromzg.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163mjzlmgoq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163viyfcfoo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ahltpbyv.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xztynlnj.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ylaktbcr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163cuzoroan.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163nwwtnhoe.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163ntpshhrx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163mpumaart.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163tjxiimek.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163eeqdjdey.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163newxvbmg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163wujhlhgk.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163oxicunmp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163fslvnxgg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163fnffgtau.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163gaqfxowq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163uyenedwm.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ubyycsqa.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163iuewjevg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163bmjdnytj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163auttgqgy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163xgipppxc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163zfgednab.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163syoaebvg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163cfpyfxqz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163qxuwnexe.html

[I04] 正则替换
来源：http://www.xuanzx.com/163knfuoaod.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163xqljfmoo.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163axzzsgcg.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163gsmsvygx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163xacekhao.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163jygymqed.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163fpxyrujp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163bixcafcb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163rqewsmyv.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163glvqycwo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163cblohaqk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163rmeyuevs.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zqqzeybg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jkmjcnaj.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163baegvkau.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163zmcahsfz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163erwskyhm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ciwiqafs.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163nvkkojmw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163umiqqdym.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163fftfltys.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163mdrzzjgu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163bmqrocxu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163wgdpbypi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ufpihmaj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163byqmgzhc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163mdjudmmb.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163opcizcnt.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163zxkwjvlr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163redgmdlx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163xoxehjqu.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ncxvwxpa.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ynozmxdt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163igmdatzs.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163xmyjeqiv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163mwwlydbh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163zsjcttdk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163mghrfjkj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163uojbkxkp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163iehuzdur.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mcntlvsz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163relkguzr.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163fkipmvzw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163hgpatmpe.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163xhwrujpk.html

================================================================================
来源：http://www.sxryk.cn/163pqdlajuh.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ldkxgdfq.html

================================================================================
来源：http://www.aibaodan.cn/163ugtreosh.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163qkpurjcu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163bbmagdwe.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ybxsacoz.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163xvarwqnv.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tghzrwdf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ljzrxpdi.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ullxweyd.html

Ruby: Time.now
来源：http://www.xuanzx.com/163dwauimrc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ioqrqaxo.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163qrtijfim.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163gmkuhymh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163hieskkxh.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163epursjup.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163yilykpyy.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163bscmcdtw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163gtabhkup.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ceubxmql.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163kkgcuxcz.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163uevqxlkl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163juhernsz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ztsiwyan.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ajzsfwoh.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163lvhbsoaq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163invhrnho.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163drstvxub.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bneihkzc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163codrcjww.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163tnvvyckw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163dumvehbk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163qznxldjq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163xdaqnvhy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163pdxhnofe.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163rswgcglx.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ykuejttl.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163auotysuv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163fkawaqjn.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163qhvtzrdc.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163pcrlzhyi.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163asqiihkq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ifyvtoyu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163dstdzwic.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ivviifnr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163tckadvta.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163rjohufzn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163etoefsyn.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163xjastwrj.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163zxrsjwyx.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163tspffuft.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163kqlchyse.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ewiewyrh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ndssnbnk.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163afsjziwf.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163didyqnfp.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ptijcmrc.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163vorgbofy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rvttltii.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163fonrksnm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163bjsakfna.html


<!-- 参考信息 -->