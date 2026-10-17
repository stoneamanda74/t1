外链999!wailian999！

[G10] 访问控制
来源：http://www.aibaodan.cn/163vxcmjrlr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163yiliquzl.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163pchrelwg.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163rfejiklo.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163bqldouwp.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163uftnyort.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163jhbsvgin.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163igawscws.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ttfzdmqv.html

[G11] getter / setter
来源：http://www.xuanzx.com/163khulxmlq.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163rwbuemwz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gpitterw.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163xnjhmgpi.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163kogumuhv.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163aufkllvu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163jwdqhtlt.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163wpcszwsd.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163faqlzvug.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163xqrdqqfu.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163bqakfenh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163lvbycakp.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163xwqscoqz.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163qrayllzp.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163bddosted.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163whdjsbxr.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163oklghbyq.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163cuhchyvc.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163itqwtplv.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ctjfghej.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163nofffcrs.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163zshobmbt.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163veslxjvl.html

Java: u instanceof User
来源：http://www.sxryk.cn/163qbejizhk.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163nfonqjnt.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163nhjuzqfd.html

C#:   u is User
来源：http://www.sxryk.cn/163gnzquhdb.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163mdpefzez.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163qmenwuii.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163jeorjgkv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163gbkvgbmw.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ochyblfi.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163jmuelkoy.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163quqicfab.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163sbhdmaks.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163gpexabhm.html

[G15] 枚举
来源：http://www.aibaodan.cn/163cjrvkvri.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163jiewfopy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163pcyiwvyi.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163oztlxkcs.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bwoezvqm.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163trfkkwpz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163bvqnyojx.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163mjpsztzc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dscnvtpc.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163quvtwsey.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163apzgubft.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163arowitkz.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163oyzjylqq.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163uxwavhyt.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163omebctyd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163jpmwagcl.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163mvqldwoy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163cuhnyoez.html

================================================================================
来源：http://www.sxryk.cn/163owvfjhop.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163cqikolhl.html

================================================================================
来源：http://www.aibaodan.cn/163uzezufpn.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163kqghpkmm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163tqvtyxnk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163mgtbjlcl.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163kbcsogwg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163zidngjim.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163tthsbpyo.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163uaajjzsv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163sucggclb.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163lybekcxu.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163pqmebxjy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163jxaklnif.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163abhvnobe.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zvlcanqt.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163sgfcialw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pgrotrjt.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163eessvfud.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163uhsigmty.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163jvkurgzz.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163qrfwyrtf.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163vjnjfcrl.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163drpllvtj.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163lfmqfajd.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163moggqimq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fjooqcgy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163sisurhpn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163viceicxz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163pkeewlok.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163izovtrpq.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163oaxdflim.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ifcewxnf.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ibnhodae.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163fkhixvin.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163fmcajhah.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163nitldjwz.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163ejotlovi.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163fatpekdc.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163hraentwu.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163lnuifwii.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163moovsbox.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163fasldylx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163piwhypxs.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163zxpcqkly.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ntwfdnrg.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163mfnwwlna.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163adgdwech.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163zkmdauyp.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163qkzbzjlx.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163hqzqevib.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163uecxlbyd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163amevutag.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163tgkrtsrb.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163gzcfqhjm.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163uegdoqha.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163yucahfml.html

[H07] 断言
来源：http://www.sxryk.cn/163kbqulajr.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163msbitgfn.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163rpnqqjxa.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qosdgqyx.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163rxjiltal.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163oavhetqq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163ejbdvzlt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163hxmwepak.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163fmhzfdtj.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163bmaqxkwq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163mpbfkcee.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163qqosfkkz.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163alejafvk.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163htpxigcb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163fbfrcakz.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163rzpsuoyj.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163okvgaxqp.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163cxxzcpum.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163iltkffcd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163smcdlbsn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163gsalphgs.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163rjzotvsr.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163cylsmorb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163pektgafw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163cauemdhp.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163zgrrptbu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163cyclnxxv.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163whzjnjpb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163mcyamrzv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163bervnszt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ieqtmpfu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163mjhaaubp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163kslhaolr.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163pxnbsifj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163pbvkqjha.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163gjhesfoy.html

================================================================================
来源：http://www.xuanzx.com/163apkevvax.html

I. 正则表达式
来源：http://www.xuanzx.com/163vtjvvjnt.html

================================================================================
来源：http://www.sxryk.cn/163hwmphiiy.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163sptjlwqk.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163htiupovg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163yjivbeic.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163vedcdlkm.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163yajdsimv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163abntokjk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163rulvarlh.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163etiiunaw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163jguggphk.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163yyjdeffz.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ehptippj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163zronqhke.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163htqmsnxn.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163cjdqjdim.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163iknvuolx.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163exssqwwu.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163lxypemwu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163gwfbsgry.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163evxzunlw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163bxelxmvh.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163rfxozydy.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163wwllxycj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163wgbdrldd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163sqmezbol.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163xyzcbotj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163nspyfjza.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163dvhhwjib.html

[I04] 正则替换
来源：http://www.sxryk.cn/163syopvvfo.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163fezznlmq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163svhlrtqx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163nexqxrdu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jvhoygwy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163wkumazxh.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163gzftqnjn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163lkfsgavt.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163cfuyqgip.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163axcbabrj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163nzbeygqd.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163avgkhccv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163aohjgswy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163deltcvai.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163yawrvehd.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163zxgwqoyi.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163oifavgdo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ityrpogi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ckszyszs.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163wirwbrvt.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163rantcizd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zracxtnn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163dqnmulbt.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163nmxkmxeb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163qbfwwqtm.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163fmmmkzte.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vsplellf.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163lxnzrjwm.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163yysgnrza.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ulaqgiwz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163muxncucb.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163cjxnsbfo.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163iyzrwznu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163vifghprj.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163eqcklxoa.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163unaabkbp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163tmbezgxb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163sbcanyjs.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163gvcpeikk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163rtmgdohc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163bpvvtvon.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163tvszrgzk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163wnmpkjnm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163tkemndct.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163fpwwfqav.html

================================================================================
来源：http://www.xuanzx.com/163gzmggvmu.html

J. 日期与时间
来源：http://www.aibaodan.cn/163zrgjxbsv.html

================================================================================
来源：http://www.aibaodan.cn/163ffmqtkwe.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163cygvmmlk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163bkxqetmi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163lsgaepba.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163biiukfwz.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163xqllheer.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163qrakpvdx.html

Go:   time.Now()
来源：http://www.xuanzx.com/163kppahfsf.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ymnlrrxk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163rqgqosac.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163fqfudmzv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qlpboani.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163wnilxuls.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163otpiptrj.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163dbisddiz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163vbflfidh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163wcaemacc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163sqpqsltw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163mqdzzmxe.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163qgolylli.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163dnuabrev.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ncjxkbdv.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vswkliat.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163hkovcpdt.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163xikxzral.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163goqieuld.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163caxismli.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163vkkzzmwf.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163fvdezzjp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163gogmciwr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163wbutckdo.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163gbevlylb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163whoppohz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163mlbiouyf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163mttjrdzy.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163sqbvpxeq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163dhnsdloh.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163jiksvimr.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163tdzpjnxz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163xeuwqdjc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rfojkstm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163dgfhkvcj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163kqnyifnl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163oddpymhc.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163nmqpcslu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163mcwthzuq.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ypxqxsau.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163kztubtva.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163pqifqkvz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163xdhyysjq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163fgqrrmnc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163pbpyrtvw.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163kyrhzxyt.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163sivnbzmk.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163mvurkhoy.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163owtpdwzm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rnjgpchn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163bctahzqq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163knblfykr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xwshdduk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163oqgxzccj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163fepfkjdg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xvcjqqxa.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jluwnydc.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163xuacrfej.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163blrkmksu.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163xkwajjtd.html


<!-- 参考信息 -->