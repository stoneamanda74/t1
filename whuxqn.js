外链999!wailian999！

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163xhjeljsh.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163szdkfopp.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163zvaloqhm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163tvjdaxde.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163fnlpqzad.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163vyrwxjji.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163gtjulrwm.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163ekjgbjcy.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163uajvsvuh.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163alqeawhi.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163gpjkdzkf.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163orbcjrot.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163sikvymwi.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ntooybdm.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163vlatveri.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163fpvxerik.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163rdsixaro.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163blfqdovs.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ngfqqwgw.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163fycvuqii.html

Java: u instanceof User
来源：http://www.sxryk.cn/163vmxgsnde.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163osyvitby.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163yefjmqyq.html

C#:   u is User
来源：http://www.aibaodan.cn/163ngnfqtpq.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ujbtbukh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163myjnkbsu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163pujgbsjj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163kdkgycxu.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163reotvkxl.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ewcxjvsu.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ahyhdgan.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163blvzibqs.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163mkcecsgo.html

[G15] 枚举
来源：http://www.aibaodan.cn/163mlxlorre.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163xboeyixd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163tssicmpd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163vymswaox.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163pubxsekd.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163zknwzrpf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163oenvalkp.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163cmjjerwn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ifizkbnv.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163irpdrcur.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163xzllooft.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163wcmsbxqo.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163clcubbxi.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xqftkwfc.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163bqouizrc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163hpafofof.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163uyvrdpej.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163djgffvvz.html

================================================================================
来源：http://www.xuanzx.com/163sgjlhpqg.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ycglyoym.html

================================================================================
来源：http://www.aibaodan.cn/163ufwrodkn.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163phknbiiy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163sngmkrzl.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163yejbslzs.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163arzpjzfh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163loxpgxcb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163pwiuweis.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163btpekfad.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163sfabbagq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163exshdqpt.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163rysfynta.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163kliiazcc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qimqlrel.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kulasyeq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163suvacmwj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lmhibezl.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163mrsehnpl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163zehfmwin.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163bbdbapch.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163nhqyivfc.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163pvmvwenm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ywdcqmhv.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163qxiqmhyc.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163yiublxef.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163zjflehzz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163punwhnsr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163saqbkpod.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163jefkkwie.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163vynnstkp.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163shtfylgg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163gtppbeqw.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163prbjwkaf.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163fwhwbibn.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163xzxirzfy.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163azlbitjp.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163nuvhhset.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163zbiiciwt.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163bxmpvcxy.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163zteuthiu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163hfqdsnxx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163dfnbzbwx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163njvcfbwg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163axvtovkm.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ykdwnljl.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163xlrpcqyb.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163kzrnlftf.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163wrggowxa.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163wxjabibm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ffklbeyr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vgtlkbfc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fhtwcpty.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163vghxqoll.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163eelhemqz.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163rdyxchxk.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163woyvbtvr.html

[H07] 断言
来源：http://www.xuanzx.com/163eqwtpikp.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ghbsixhe.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163aqsbixss.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xjvgqehe.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163lriwymop.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163bwlaqynl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163mjaqqhpo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163xtlzbjey.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163drvakqfq.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163zoyonctn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163fjalsufv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163cncnxskc.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ycgjdupa.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ywqikrbh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163hcekchxn.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163lpmxlfnc.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163qmrlfpii.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163olmlmqwv.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ncvbgpxi.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163sqiyssub.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163umhzhnqp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163zvpzmqul.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163bvqtqwhs.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ggcvtnow.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163adngmbgu.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163eeyaezfu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163xyiobvrd.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163tahuehcp.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163mdhcocfi.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163hveolsie.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163xwbsxcnx.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ehywilma.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163rlutcjpl.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163mkrwjufh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163iyobotqj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163hpkzqvpr.html

================================================================================
来源：http://www.xuanzx.com/163jeruuria.html

I. 正则表达式
来源：http://www.aibaodan.cn/163sibtlrpd.html

================================================================================
来源：http://www.xuanzx.com/163lbehxaww.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163lvieifus.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163oscfcqoe.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163otrabpis.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163qzslavls.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163zwifjbpz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163agilcsoh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163nyranudt.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163apvqejcv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163vqudykcr.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163tttsahup.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163qrwrgphv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163kxhhdxgd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163hudylizp.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163fcsmetcl.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163qvhuqemj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163bglhwkgc.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163bxdbyrnv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163fpvnozou.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163cpogpmzp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163clzsrgyt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163qifxxiph.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163aqqfaqkm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163jdhhtfxk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163xuiwdicr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163smbvmliu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163euvvxcan.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163qjodtnjg.html

[I04] 正则替换
来源：http://www.xuanzx.com/163aeauvjkr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163bwepgahw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163yjvtacor.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163puwechhf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163krgkehfm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163jlmgvrql.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163jylssmug.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163lqqlllme.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163clzohijt.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163utfybusm.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163dxeneujk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163yfumlwjt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163aeqasicm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hpuukrkv.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163bknugofd.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163wyxeusoo.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vibnzlcd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163qbvqnttt.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163hajctfxj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163wwrwnttd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163zrhigxyh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163zzesvwrb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163hwhklbpn.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163opoatruz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163sptnukik.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163xxetrpgx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163lcvwsuqy.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163qmbagshe.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163tpcrvcmt.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163knfpdwkh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163xvljwssu.html

TS:   /error/gim
来源：http://www.sxryk.cn/163hrsfemvn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163zchcaxnj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163otxpnvwu.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163lpwlpioh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163buumrygf.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163hvvhlpry.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163xwddqyav.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163kigxtwts.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ywxwwpnk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jesalths.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ylmrsqsb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163hcaddtyi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163xxvasiij.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ykdzwttx.html

================================================================================
来源：http://www.sxryk.cn/163fflrzdol.html

J. 日期与时间
来源：http://www.xuanzx.com/163pkyaszlj.html

================================================================================
来源：http://www.aibaodan.cn/163mgssupae.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163jmmmtent.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163eljxdxgo.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hgkwhakr.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ecitjbxg.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163yizbawoi.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ohfisdyd.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ocgezels.html

Ruby: Time.now
来源：http://www.sxryk.cn/163xdxvrwvu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163pmcrokrs.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163kqnbpcyy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163flpynhbp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ruuxwkwx.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163hhszhqby.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163zfcgibrn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163qtcpvwku.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163dvgegzck.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bnesmatx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163wssbykmc.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163xhkjpcyx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163paemaxnp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163cameelvw.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163shtxrvyb.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163phbhhjnz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ykibbrfj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163upohzyhw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163rsvdvcqi.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163sdaqjntc.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ulepxfij.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ejlnaexf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163fhscczpd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163gerojsjx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163txjvazgy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163afdmbywc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163umsjkmac.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163tnfephzm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163snbpnuuj.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163jgzeurqg.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163nnyerrzd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163uwtiubtf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ekgfwvsc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163yobsysib.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ggogjrkf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163takrxgav.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163mgzrywhf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163upvgxpxo.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163tozuvtmw.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163wktghzbm.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163wmpysywg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163bpxzbpof.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163vvszfyky.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ypcwlskn.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163xvmfsiis.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163teludagf.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163fyrdoioj.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163gmvyyyyi.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163yzdeigkx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163aerkoasv.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163corzqzmw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163qcvdlilh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163kpuocobs.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163cgtahtyn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163guuumnou.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ndlfcwti.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163uetdwlxg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163dhvecsao.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163astthsxb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163bgxstczq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163rwojygrr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163dlmpguad.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163pefvcico.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163wibfaqxh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163hibyrkrz.html

[J09] 时区处理
来源：http://www.sxryk.cn/163hdpcyihw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163xpgxjgdj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163rzrnscsh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163fquuwqwu.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163iwgxsbog.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163adkqbbpx.html


<!-- 参考信息 -->