外链999!wailian999！

TS:   public / protected / private
来源：http://www.sxryk.cn/163iwvtmesd.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163eqvijkld.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163uuouehkz.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163atzmpgek.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ytojvoow.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163chodqnwn.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163fnqnrwkv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163bgeazekv.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163qxxgwggd.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163udozkcyp.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163iospaatx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163dfpmmymj.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163yvhubcai.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163gwsmauzj.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163pwmzaczf.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ubgyqhmu.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163wrrshepb.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163gmsszrmq.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163wxbvvxkm.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163vbxxydky.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163sktdsjqd.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163zrwobvvl.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163ppypmmor.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ithyphdh.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ptqvtbpl.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ggbkkkjw.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163agfabjlw.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163kxobehnt.html

Java: u instanceof User
来源：http://www.xuanzx.com/163tzhcegwt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163wybwnxet.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163nzloguge.html

C#:   u is User
来源：http://www.aibaodan.cn/163nhabprhr.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163xbxaqqgq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163qhzimjif.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163nedtwwxb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163yskfbusk.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163pmgwtzxp.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163rabjqglh.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ohmrlyep.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163kqkfxlls.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163jtqqgfrz.html

[G15] 枚举
来源：http://www.sxryk.cn/163tnpbwqtf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163cuhgnrys.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163websfuuh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163bpgpkpmh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163jcydduue.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163wyhlvhmt.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163zmmwstwi.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163quuzuhnh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163cmabvplc.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163mgzcwynx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163tymgazic.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163klepnohz.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163wdfjbfaw.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163nbmwydch.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163maggzdjp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163oiegynbk.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163flyaqokj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163mzlmpszz.html

================================================================================
来源：http://www.xuanzx.com/163mxxuzryw.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163odvcdvrc.html

================================================================================
来源：http://www.xuanzx.com/163geafjtyo.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163sifwyazg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163iuodugvf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163bcodpcqz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163bxvefknp.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163nnzmneqt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163ysqjbzbp.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163jtnnhdxi.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ulqyawpr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163qzmxupmg.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163gxwhaqyq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163zqzdxxse.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hdoifokw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lemuuchh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fydrzwab.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xprvliee.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163oclcgfik.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163eyjdhohg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163bziycuih.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ijwypich.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163nfovdapr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163moifpwox.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kdjfkzfx.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163qydzjmcp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163vvblzgng.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163lbvytgql.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163awdawofq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mztaqkiz.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163elipfzwh.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163eopazhlv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163mhbgdqfe.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163bqxpoafc.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163oyblugzm.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163zwrbyotz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163bmguukpk.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163shbhihhf.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163afwejovr.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ospqribh.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ihwgmimp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163bnizrmqn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163myjdxyzb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163bpyhijvr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163qbluaqto.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163xptckcws.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163eguynvud.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163wfltvnjk.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163rbtaycnu.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163uvdphbnz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163hgizeldx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163onyvfoem.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gguyaxjt.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163tcxreene.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163swpnkdrp.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163rfouxchq.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163dwlnjabv.html

[H07] 断言
来源：http://www.xuanzx.com/163pcuizqdh.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163iqalyeal.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163txdmsard.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163rswkofva.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163zexkflff.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163iiwwhaev.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163zfawnjre.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163iqgwautm.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163irorymja.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163expckdhn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163efmvnxjh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163eolgafec.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163usbaohuw.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163jpkpggba.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163aqoinkxj.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163yhelgpvv.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163xdvbkvgh.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163bzmqdswt.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163nurnhvam.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163fjgxdrpd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163kgtqcrqu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163xertdrjd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163nhhgzuxe.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ipaunaow.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163srnmmwfv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163tizvpbvh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163zmzbfymw.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ilxreewf.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163vbrhlcji.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163mkenuwls.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163dudskiop.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ehexyngs.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163biqnlzyh.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163hconmzcv.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163vwgrbjts.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163acauvpcf.html

================================================================================
来源：http://www.aibaodan.cn/163cqlpgtnq.html

I. 正则表达式
来源：http://www.sxryk.cn/163mnvjlsef.html

================================================================================
来源：http://www.xuanzx.com/163pbdsqomm.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163pmonpnbu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163bvuqxrly.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163qtapewfn.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163owdvgdwy.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163poxrbubc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163wapmgvgf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163bprvadwq.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163mbzhcelx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163xugqveze.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163dgxhgoio.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163lvbalvek.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163rqpasvst.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163nzgqkpyb.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ceuczino.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163zjniwwvm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163oktsnmgb.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163fxjdmzat.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163befapzhu.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163mfyfpzyr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163fdeblrxc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163jmexyzfg.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163pgfpfadk.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163lklbmnie.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163omvqclxb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ccrfukmk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163csxdibvy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163tldolpla.html

[I04] 正则替换
来源：http://www.xuanzx.com/163wrfmsmsy.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163jetfehgu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163qzqmkfcc.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163szydkots.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163iezgpjgx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163epwrhrto.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163pfeyzpve.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163xnrsmssx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163emgsnjkx.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163tugrebxk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163mhyxgjcx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163lbnmjjpp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wianggns.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qsouwcmo.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163thajnrko.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163otfdeday.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163bgfoewth.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163kuggjaho.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163pemsjuyl.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163jmsbclmj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163bwjtkjqf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163zuslzmov.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163qzxyyvqh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ebmfwbnw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163mcomhelo.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163kkznmxfl.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163dmvnpjsp.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163kynykqtl.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163nrsybmin.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163xsmxwmpb.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163yeinnspf.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ajyuprvz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163xwuqcqvn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163eegesmjv.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163wumfxigb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163kfnvanhy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163mppoymbp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163eehztusf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163kuolvabe.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wpjecwxh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vkvvxbwm.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163uzdenlct.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ulzilvyi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163aeqqhllm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163bbowpqtg.html

================================================================================
来源：http://www.xuanzx.com/163zvjvzqdw.html

J. 日期与时间
来源：http://www.sxryk.cn/163qbanuqua.html

================================================================================
来源：http://www.aibaodan.cn/163zyiwdrbc.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163eqxvbxpv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163qkdltmoy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163kgdpnixq.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ylmvthcl.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163nvuivmom.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163xrnxtpox.html

Go:   time.Now()
来源：http://www.xuanzx.com/163otygbpts.html

Ruby: Time.now
来源：http://www.xuanzx.com/163bsudzunt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163lyhivbys.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163rdocylml.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163pysfdyiu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163wczbccyv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163vdsbyumm.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163zkshvjpj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163awwyqhij.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163pxiygonb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jgxlutmg.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163qgrpwxcn.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163qebipofm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163umzbopkf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163niikuhoz.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163afzquenm.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163yuhekzvp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163usopnmiq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163qmlsfveo.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163omorupxn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163lxrrmyzd.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ipycnxpq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163bkmrafnj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ikhingns.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163feadquop.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ecqtwqkv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163bygrtosl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163aklkcfdx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163brxzntsi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163vzqlisxs.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ckqsvfsu.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163bjizedif.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163trfdisfi.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163hobxysrw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bxxxpdad.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163dtppihjq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163bpqkapmh.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ggoaioub.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163odcauuaf.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163twnubslc.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163pazbytmj.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163irdahltq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163oklzfabm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163qitvmwmg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163gkvrcovt.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163vwrgulqt.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163oikfipag.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163xzcjdudf.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163erclrdnn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xbuyadgo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ofnwjlkd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ahvayvzm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163nzfhxyxr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163tmnczwel.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163xoqtpwwh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163timpngyu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wjgdwxlz.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163jrpqeylo.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163jsgyfapz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163rwapvrnq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163wjytjelx.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163mrwdcgdg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163knhytwmu.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163qxbuawhg.html


<!-- 参考信息 -->