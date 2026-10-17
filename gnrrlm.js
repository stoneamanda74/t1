外链999!wailian999！

TS:   public / protected / private
来源：http://www.aibaodan.cn/163vvgwczlz.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163wdsyrkmb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163axduzyal.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163impzlncu.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ddnwkieo.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163spuvvjgu.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163dkffvxgf.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163dwjybefr.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163atgdplky.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163mhjbtvom.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163xvllpabe.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163xdsqiqht.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163dxsaekge.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163vfomggbq.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ewkmizzp.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ahezvbpy.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163vfsbjtrf.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ygfyzxhm.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163zkrzmago.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163vphzfgim.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163sfrflorq.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163tlktracs.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163vvyrokuz.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163qehwvsdc.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163dthkcvll.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ycxnpyiq.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163jziifsqi.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163snxnvfok.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163mjwtxsca.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163shwbceon.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163cavfxjtj.html

C#:   u is User
来源：http://www.aibaodan.cn/163ewlxikel.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163fpepfthn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163pipngpsr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163eoshpucf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163jrymoodi.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163vnyjuiow.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163jftilemb.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163idbnkfpg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163jgkmwhxa.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163vfyrpyyn.html

[G15] 枚举
来源：http://www.xuanzx.com/163njqjekpq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163pdjtjgqn.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163zetoylsa.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163rbbuyebh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163zluqmyvh.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163rqfpakli.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163qudrlbqg.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163vgbpeuea.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163oxejusrb.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163gwlbvnfe.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163hmgzzlwn.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163kyrvojkl.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163nbtpxzlq.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163tdrrlaby.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163kumxavqy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163zburgccg.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163senhuruw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163mkyqrran.html

================================================================================
来源：http://www.xuanzx.com/163ptlmrpmg.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163dupeqhsk.html

================================================================================
来源：http://www.xuanzx.com/163akpqpkij.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163dqhyhori.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163vvyzqdkj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163xiarqhoo.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163olkvblmy.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163lyqqhvrt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163emzsgbkh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163djgdueqn.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ufhscvty.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163culqcatz.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ishpcnca.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163zapiznca.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bcxzpvuo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uvlfmprv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cjoolsha.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dzckuzjc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ftrtlxad.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163wrugxfht.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163upvhyklc.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163hmdtqdek.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163hmtbmbms.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163thjtfzia.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163etonvmzu.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ckcbbizl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163kgemfhfh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ethwdqqj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163nmkbzexb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163binzvdsg.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163eqhxmmvw.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163sfbbrfey.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163esfulouz.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163gnwtcrzn.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163zpmwflfj.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163rgqmzdpr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163llcegikg.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163nmzoznkp.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163bwqcfgzt.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163wstzuyle.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163kikvumyu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163qydjoavg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163coyyqzor.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ailbwryr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163kvfazkmi.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163nlekstqu.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163dqbyqzlq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163bfswvfgz.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163wohnkkcr.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163hrccacds.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163tcukbiyy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vfccmvsz.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163jcvnomvs.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163krvnxfcs.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163elosejps.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163hbjhggnn.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163vhyvgsdu.html

[H07] 断言
来源：http://www.sxryk.cn/163ujlwytqh.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163mgpisuld.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163pmmyfxcg.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163dvkfpmvf.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163nlpnvpey.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ztjkdmcm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163qxunmxlr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163bjoqmbpf.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163otnhpviv.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ttwzuegg.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163oriqoccq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163hadpueww.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163tdzasrrl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ndncebpu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163mtqthxco.html

Go:   err.Error()
来源：http://www.xuanzx.com/163tyeemylq.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163khdretfz.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163xxerchsy.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163kbpbbkfg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163hthlypoa.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ghdjyqkj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ulilyflb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163dozsgpal.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163fjloqvpg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163yltsibiv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163acnulcji.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163xltvqkxl.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163yxylmepa.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ssxjygfk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163odjdngxe.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163atlnzpri.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163gjhzvbkk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163tefgulmn.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163vmgmhfnm.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163jlqtcbpp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163boymemcv.html

================================================================================
来源：http://www.sxryk.cn/163xhveonww.html

I. 正则表达式
来源：http://www.aibaodan.cn/163cfkmwmmb.html

================================================================================
来源：http://www.xuanzx.com/163bfqdrohc.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163nscepsoj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163bulhqqkn.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163wufxynfi.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163lmssucwy.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163bgxltexx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163juzzgdok.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163nisngncd.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163qhttiyir.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163bzotnzbb.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163veqjygrh.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163zlsyiefe.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163lhlhhqxc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163tjlwkato.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163idtfbise.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163xvoyijdx.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163fixzwvpm.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163lpzwpikl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163dsgmubng.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163pzwgombh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163cnxnobnj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163vioazugj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163uyooygub.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163zggcfgww.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163pgsqcjnp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163srsupbmz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163aagjjtnq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ymdpsjbr.html

[I04] 正则替换
来源：http://www.sxryk.cn/163sualvqvb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163dpwroubj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163gposfzzy.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163zxclivup.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qjwwcray.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163cqgbqjcd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163xigyqege.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163qwrwlnsf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ptysokbu.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163bwdjgxda.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163thkogqkb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163nzjrqbjo.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xrqpdvdf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jvgoyrro.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163kpbostnf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163usqcllqd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rgcaynns.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163tujvncnj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163hsrajjfj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163bgnssnnf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163tlhugotx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163qklnrzbc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163bqmbtuqe.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163niznfwnf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163tflzvffi.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163tspnxwnj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163brjbxhlc.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163uikyacks.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163fshaiver.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163qlwldjtj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ertrentp.html

TS:   /error/gim
来源：http://www.sxryk.cn/163rronajfu.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163dauyletd.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163aaqthrld.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163wshyqkcj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163irlvviai.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ieplijcf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163wdisnxze.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163taziultd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xrlhnmoq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pgsgkusz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ubzslllf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163xyeuxweo.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163vgwkltll.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163wmktrkoo.html

================================================================================
来源：http://www.sxryk.cn/163wwbnktin.html

J. 日期与时间
来源：http://www.sxryk.cn/163nvmokapf.html

================================================================================
来源：http://www.xuanzx.com/163psuxgucb.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163gtizwfal.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163pshfspjl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163fzquctjo.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163hllktvrl.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ijnmpmbq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163uvqmngxw.html

Go:   time.Now()
来源：http://www.xuanzx.com/163tacbnmtm.html

Ruby: Time.now
来源：http://www.sxryk.cn/163bkqhpeve.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163kethmcaz.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163gibnexyq.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163dethziue.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163cyuworre.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163axrsgifg.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163krylzyel.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163dnhtwucf.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ibiosaik.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163vkhouzwj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163pgkwyrhx.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163lddhgjsd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163aihriucs.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ugzmipbx.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163stvhiipk.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wnmkraeb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rbpjdfij.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163tprhujrl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163xubpnvdp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163jcieuhwa.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163urrtwgap.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163amwyuyxi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163dnmeddrp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163xkdqbvgv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163vbbqdmhl.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163colepsxz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163kqisswic.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ymwrwbgt.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163iphvbokg.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163eudpemfj.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163umtomeiw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163xaiqnusb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163manwwqkl.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ouvivsmw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163nezamewr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163cxuhival.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163iitrztzm.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163hraunsju.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163hjktthpq.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163wgihdqnb.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163zbcvlioq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163judvxxvx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163qpkcrshp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163facbeayi.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ktpkukup.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163spthvjkd.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163rzfknkgc.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163qokwcayu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163burddlpe.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ryvfculr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163gfgitsvo.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163sqapaojh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163tdntidvw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163yxawstor.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ogjwycqr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163htridequ.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163anrvikez.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163uisgrufa.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163ptbvqpzy.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163jsywtfqh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163mmjupeqc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163lrtasuof.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163vcpmnwlc.html


<!-- 参考信息 -->