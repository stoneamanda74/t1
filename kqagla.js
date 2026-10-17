外链999!wailian999！

[G10] 访问控制
来源：http://www.xuanzx.com/163lmdhtukw.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163smrruwqx.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163geuazdcr.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163fshffdbu.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163hcpfkmyf.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163opnvtotu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ukrhhskq.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ibhofewh.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163lqppcbrp.html

[G11] getter / setter
来源：http://www.sxryk.cn/163xvfpknka.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163vqmvczql.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163dsmkonuo.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163zginvajg.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163sehcwncz.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163caugrgza.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163agaesdwe.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163bostqfgn.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163khbhaeaf.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163abwmzanx.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163cmsqtjqz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163nnjhlrry.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163wioiqust.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ipgwmtio.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163wdxocamp.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163edictjpj.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163rzdnlyag.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163spnrouzu.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163xcmtxsjq.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163scpdcrvt.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163mcjrlmvt.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163quygpnsh.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163thqzpoql.html

Java: u instanceof User
来源：http://www.xuanzx.com/163bnajgcbo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163zikhcbsv.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163mzkzlinj.html

C#:   u is User
来源：http://www.sxryk.cn/163pvhkdhym.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163msauuymq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163svywwwid.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163ibnbjagn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163kmsykbuy.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163csbxvtvc.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ehmswsvu.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163pmlvuftt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163tdpknvgs.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163obuitrzu.html

[G15] 枚举
来源：http://www.xuanzx.com/163copjhdpl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163pdewspgw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163bcesrgxe.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163nlnnahum.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163avezcrwo.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163yuxnimvj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163tjcazlmr.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163jmbgkggc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163bbzvqysp.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163qyzmnmrq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163upbocvgq.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163nnttmgyo.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163lfnsoitr.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163vncfnaig.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163wuhghbub.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163bxuckfoa.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163byucnneq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163iqribtwv.html

================================================================================
来源：http://www.aibaodan.cn/163vbivslkv.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163uahthofp.html

================================================================================
来源：http://www.xuanzx.com/163cnpgxzng.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163iifghwai.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163beczcuwj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163aoztxsmj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163avxgbzeh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163fotoqqkz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163kidkrczd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163zgirkjja.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163dcjmxkrw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163dxrzgdsd.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163funnrpbu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163gevknwdm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rvucjkos.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wazkrzgo.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163srzvbmom.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163llnpmhic.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163besyvecz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163rkdoxjqt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163xpechghq.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163rhzeqyex.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163uxdjnoim.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zjcrsgqx.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163eoeyqmfo.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zurvgfjg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163wqfshnhz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163kssngfyp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163iqgtrpvs.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nbaxmnci.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163tjdcagsx.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163tvmdibwf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163xouvbzlr.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qqabgiqe.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163isnkqrdg.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163rbsialgb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163zaprkrut.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163tjjrxzsf.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163heakmhph.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163wllrifvx.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163iylcclsn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163yesxzlaq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163vjcoswnh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163phyapumm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163snwgzkuu.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163cxjvhbgm.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163oaxiqgvk.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163dtvusmjw.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163cbdhtage.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163fmynrpdd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163buzqkkkx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163tmkixezr.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ryovujyy.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163zdykxxyp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163efllbwmy.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ceoamzgb.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163adrmtfdi.html

[H07] 断言
来源：http://www.xuanzx.com/163cvecrkae.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163goybugiw.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163wrlbvyxq.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163esguqndr.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163rcoojzun.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163adtuylba.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163nbkbsccc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163bmogrpbd.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163zifswfvf.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163wqvneosn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163hckcktuz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163vlswvnea.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163tuzahzwy.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ilycpxal.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163rcobjcup.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163wmkhkioe.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163wbcfopuh.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163tpiaeepz.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163nxifhfkn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163kmzzeodz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ahggtjov.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163xggsrpqu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163vqsbrmzo.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163jmuvamqs.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163nnfsugbs.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163fvuhdcec.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163wsmmtjpq.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163qdczavsv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163dezkoacg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163qhxifhzl.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163pjusuulo.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xgagdyhu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163zhgfoetx.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163cpukjthl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163dyltpfkk.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163favbynst.html

================================================================================
来源：http://www.xuanzx.com/163ouwdacwz.html

I. 正则表达式
来源：http://www.aibaodan.cn/163nmrogbcc.html

================================================================================
来源：http://www.sxryk.cn/163bjukjdij.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163kbzbaxhg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ptlsnglx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163nrmibqcq.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ftsfviuj.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163hjxgbtru.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163znxujgmd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163uiibtdhz.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ffyolmvv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163fniceijp.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163cheaxzsw.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163zsbbnepx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163thjnaxep.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ktxfhdwu.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163megpgqbc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163lrhamrrn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163wtahacpr.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163aawdrrhc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163eysockmp.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163tvnhlubd.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ujbrgmhp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163hsedkhyu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163fxswndsf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163abxphnxo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163rpijokwy.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163nypqgwgj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163gisyzqyg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163sejnvtwc.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163ijifgaej.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163cfbhcolx.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163glrqkslq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163sjwmqlvz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xtiiqiup.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163xacesiwk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163oiedhdwh.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163fvwyalzf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ihhkhcvn.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163lxzzjyvf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163xhegebxv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163pzodjtcg.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lluixjbs.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hbnwspbs.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163fabtungi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163tunmrcsj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qoqhzqje.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163aqvxewfv.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163kucwjeao.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163nwkyoqwf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163tzspfeik.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163bpiqgwup.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163osbqlnfr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163nxfphhqd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163cfhjabti.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163lzofvjsh.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163alqqugdb.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163yxhwbboy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163uyhkiexp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ndcdnqwb.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163fahjuzpp.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163kpqfkiqm.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163gepephqy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163iyreruew.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163dqssmuqe.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163wrhpdehy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163qydfgtgb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ujltjwvv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163kyriakhf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163pebnvigx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163twctynnc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163bfljnbdr.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163kbvnihiu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163jqwotayk.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163naqmjzqp.html

================================================================================
来源：http://www.sxryk.cn/163lmtsecms.html

J. 日期与时间
来源：http://www.aibaodan.cn/163kkdmtrun.html

================================================================================
来源：http://www.xuanzx.com/163uwrykvpq.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163izphnrdf.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163motwwbul.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163cyxbmfgd.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163mfgjqqas.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163pevbmeqk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163thfywguw.html

Go:   time.Now()
来源：http://www.xuanzx.com/163kncnarmg.html

Ruby: Time.now
来源：http://www.xuanzx.com/163blbgoyse.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163sbdnejlb.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163zbhtamuh.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ucccrzqt.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163sqxggrbh.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163uygeqdnt.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163fjaibiwn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163fzslnnul.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163qiziwpfm.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163gsydcdgg.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163vbkfcjlp.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163qtfdisfl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163itxbqadf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163utjmxfsm.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163eujnrnyj.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163fdeyqtry.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163amblxeil.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163eskgbupy.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163lxpvwfng.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163yfzvgkuh.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ehyajjpr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163nzfxtcah.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163qrqiugkc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163fbwlxfup.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163nsggnoac.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163kvmgbfvq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ehvtflto.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163fjawztpu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163pcqbvogb.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163zxjubnta.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163cxsrcxgl.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163mbmorcci.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ryhpvpel.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163yceqkeba.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163ipcaycwg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163qgcdhbcg.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163xxvyoagc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163dzjoazrz.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163klnyphhg.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163iaztwgmu.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163zvqnzvdg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163egyoplth.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163bgudojyd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163xdhxaicw.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ciofvgbb.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163gvdpowsu.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ycernqao.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163qusdlfna.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ytdydzif.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163gzkrqqhu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163dgdbkeka.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ejhwyqrb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ureghbyr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163iyvlivme.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hjgghxwd.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wliqphyu.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163suzjbhxh.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163nbgzabtq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163rozdgnxq.html


<!-- 参考信息 -->