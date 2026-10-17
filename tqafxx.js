外链999!wailian999！

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163yhwlzulc.html

[G11] getter / setter
来源：http://www.xuanzx.com/163uwejifag.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163qbgsldcv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163rajvbtjn.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ibwfoyoy.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ihnkvqqz.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163msmsjggj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163pxqewxsl.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163xpuuzoje.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163yxuhbaad.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163blwokdxh.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163oqofqvyt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rmwlluib.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163odzbxavi.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163hefqvfix.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ffvyiclq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ofowxkfg.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163irzkuodm.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163iwzutcqa.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163qkrozyhm.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163evrywmui.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163nmsgbhlf.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163loyhmwle.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163bqfzxkdm.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ghmsvpxd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163zrpyrngj.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163lozuklnk.html

C#:   u is User
来源：http://www.aibaodan.cn/163dcftkhbk.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163wygbdqul.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163uvvcmosn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163fzrbtutr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163rwcujjdm.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163nqiggjij.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163enrfgact.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163afilqlrp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163xzbuuyor.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163aqacgkxp.html

[G15] 枚举
来源：http://www.xuanzx.com/163bnbhwzth.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163pwdizgju.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163tngshkua.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163qvhyyvbc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163hscwiybo.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163qmegmsmp.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163yiplbyes.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163flnacejl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163tonazfdc.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163zpibijnn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163iysecdur.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163injavykn.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163jwulzjyq.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163jeswwtgv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163gkcptvmy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163bhdliett.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163togmgyde.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163tataerpo.html

================================================================================
来源：http://www.sxryk.cn/163kgfzzewz.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163vcyinnsk.html

================================================================================
来源：http://www.sxryk.cn/163miikswhq.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163nmckfjmj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163yjaabgid.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163pxdkzwja.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163keccekqu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163cpekxuen.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163oczjkele.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163bnfqiwsc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163jdgijjav.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163obtyqeqm.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163uhuaoyro.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163xludiaoy.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qtmznius.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lamiwsfa.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163aedixrul.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163eznmpuyf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163awvkbkuq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163wzcgcqkz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163uykxybiq.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163bdqqkyvb.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163mevxshcs.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163lvylnbsc.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163poeqscgt.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lbdrrngm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163cdpnulbh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163oxxjjfmu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163sflmbuyt.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163jiphpkcc.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ssnthbgj.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163qiknnnik.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ggmqcvpg.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xdauvgic.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163yjdeeoxc.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163pngcarno.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163usixmqzj.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ieppiktb.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163laylpnqf.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163yvbaaivp.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163yherdqvj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163bkbzfvbh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163nsmasizt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163hsspxfdf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163iqtzezxb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163oinhytlw.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163flbzubbb.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163fgigmezz.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163uypjjzml.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163wxhzogof.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163uvpgtrpd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163uepdtyjn.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163wtquzkrj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ipaccrad.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163cdfvpuwv.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163jqpktats.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ofwyexve.html

[H07] 断言
来源：http://www.xuanzx.com/163gkvlvkyx.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163apkmtndr.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163htftaeln.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163gjjyxhlc.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163pxhsvpoh.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163ufzswzsb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163txscfhfo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ryhpbkuu.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163aktbptrl.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163kklmodpp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163trzonukq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163vsywzilt.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163xgftlwjl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ywbffuqq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163pytntosz.html

Go:   err.Error()
来源：http://www.sxryk.cn/163demnpbqs.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163cqituirb.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163dxrrzrow.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163udegjfrz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163xonivquj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163ovxhfjbk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ujfqepbb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163lvaoafqs.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163joosbvxw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163mwhdfldj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163xzrrrqae.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163srswkpvn.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163yydrkzqx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163kvxrjhxy.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163nitdtbax.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163krfzmdgu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163aetczijt.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163scrxrqpo.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163oijijpyg.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163lfiwxiyq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163sdfajkgb.html

================================================================================
来源：http://www.xuanzx.com/163oogpizmr.html

I. 正则表达式
来源：http://www.aibaodan.cn/163lxhjljkh.html

================================================================================
来源：http://www.aibaodan.cn/163epfiralu.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163aocaeden.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163dffrmhlz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163bytuiint.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163xashzrnj.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163lkoufxtp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163kpwzexeb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163secybdqc.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163mmebzyzu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163owuxkhcu.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163zfxklxrm.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ljyfuyue.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163sykaagfp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163phyauvoc.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ckcgbmsc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163pnerhchy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163tvtkuxeq.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163mupfeocj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163iukddjpy.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163fadyepps.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163fzwsbgmv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163jzucenke.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163uppjukcv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163ldqqhllk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163umymljdh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163qzqkccse.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163skofdryv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163fefnupzo.html

[I04] 正则替换
来源：http://www.xuanzx.com/163bynnbvlr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163sikordwe.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163nyrtchcx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163cbcxmrfs.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163vscvuokr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ylndqoyr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163avleqlxl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163jyfxshfx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ptozjloz.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163vjwzypbc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163sbgusytu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163xxzjtzfm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rknrhiec.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ujlemumm.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163bqvvrcdi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163dqptgszu.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ohuluviw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163lljhungs.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163rfmcohmx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163gnviixfh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163qqpekuyc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163dkongzvl.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163wiyqdzwq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163eqynvwgg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ctucxjic.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163uievkxkk.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163vvpxfkqn.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163xcnwngoj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163emjodbbz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163hhumtplf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163gpgamxjz.html

TS:   /error/gim
来源：http://www.xuanzx.com/163rcvihnug.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163jcagfuwa.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163lqwikuzn.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163fewvknxv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163dhjkaoyy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163sfyioyji.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163bhamcjxa.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163szrnmukv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ezqbjqmr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wrpzlcur.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163dpwvupmp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163dfsfnytt.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ilfrffaq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163efdrezkx.html

================================================================================
来源：http://www.sxryk.cn/163rcdmfuje.html

J. 日期与时间
来源：http://www.sxryk.cn/163rscnumyj.html

================================================================================
来源：http://www.aibaodan.cn/163jgjyivcx.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163vhcjsimz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ggbtimvl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163eqdjeemk.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ubumvavo.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163vhpdqxpu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163rvoqpfvd.html

Go:   time.Now()
来源：http://www.sxryk.cn/163pbkhomyd.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ufylsqcj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163lknmyrpp.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163rbnygafj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jwhhffec.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163fudklwuo.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163lxcicort.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ewyiivcw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163acxmxpgq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163evrzjpds.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ixkevcki.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163zlzahszb.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163xpmlqffp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163qkknlbsp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163bxncjwzw.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wsvcofhs.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163aqrztjnn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163rtoayfvi.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163cctvnati.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163skfugwso.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163voobjhcm.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ngbapixo.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163gtflteth.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ohkeuoom.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163yxcavafe.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163yucztcym.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163fpkasqaz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163zjsvnsrm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ezeqyjec.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163dfgfpclm.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163svfarlzn.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163arkrfzlt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163rglaedda.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ecjftrho.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163qexcxksa.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163emmhhsje.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163dbxonwmt.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ngqqshxj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163lrhjxqdu.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163fisdsyhs.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163suxobyfk.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163vmypjwek.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163irqgdjri.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163uprcfuke.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163gdspoost.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163myfhgpwx.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ubqltiqu.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163pdtvhqat.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163bqvfpqjo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xlziopll.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ndfzlshl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tqunmgln.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163feoxsydi.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163qvdjlxox.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163cxchxkdf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bagpkghk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163yygqacvw.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163jmkdocni.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163anscabgu.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ohuasqvd.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ojsybpku.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163zszzagdo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ycghavtk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163kagmkesu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163mwveuzed.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163hxccvgym.html

[J09] 时区处理
来源：http://www.xuanzx.com/163hnnxguni.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163hupmhrgb.html


<!-- 参考信息 -->