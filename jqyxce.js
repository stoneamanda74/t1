外链999!wailian999！

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ecbzuwdr.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163xtvqlwlh.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163xjgrvntj.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ndbnjsjm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163byuvxgll.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163cjoitccw.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163fvcuwtov.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163szdkyafb.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163lsbznneu.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ttynenyj.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163wdbalgbw.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163zxrwrsqg.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163vthpcshd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163lmmrfysm.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163wundihrx.html

C#:   u is User
来源：http://www.aibaodan.cn/163renarfsy.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163lyrkuzoh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163zghhnnve.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163jfxnjigc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163kexakmjo.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163kkijpfqe.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ryrsismn.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163isipjeiv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163bdgldojr.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163fruzfexs.html

[G15] 枚举
来源：http://www.aibaodan.cn/163loweohdf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163fzdaygtw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163zctjielz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163orgosnzu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163kaivxoqn.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163fysarwos.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163crcwhoux.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163hkkyxgrm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163kbvdwbkm.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163myiookyw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163zapmpmvm.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163wpuvchfa.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163nmudyncg.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163wowwxszz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163avakvgio.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ljrapsyf.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163plzdhfpr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163fhgbvjlk.html

================================================================================
来源：http://www.sxryk.cn/163glkzkzwk.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ewsmwqpt.html

================================================================================
来源：http://www.xuanzx.com/163ntbsxkrt.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163nrdzmtpf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163gssnwwjh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163cnqwmbbq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163spxxwxtd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163bsxbatbo.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163hypisrte.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163vyuirzfz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163zostfvzv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163aecnjzur.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163frbacvrp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163lnilhvwc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163njishxbg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cggdxslr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163cikhcxut.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nzkquqok.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163bjgsshjn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163itjenfvl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163cyhvmmot.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163zpglbkby.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163nojeubll.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163eenohfjd.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163dzutkfwj.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ypirtdbt.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163imivvuha.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163zcuxofxu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163jmqgwwpq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163lphneabm.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163gzticorh.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163womqvnxj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163akbgwfum.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163tkthnjxa.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163sbwvcxuv.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163wtnvipej.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163rctgyicz.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163wbwcyksw.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163zpihppwm.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163zbcyosjc.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163tibkanep.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163sqrlwtdv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163npcetjdv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163rweubfwt.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163iadyznkn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163trswlczl.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163igwjtgra.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163bxlvlfta.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163xtobgfuf.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163esdiypgn.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163mfzrvptj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ksxjttzs.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gglgzooi.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163zpefjbjz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163zxiymjbd.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163egtgtcah.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ybuwupkm.html

[H07] 断言
来源：http://www.aibaodan.cn/163fdhmodrp.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ihslszge.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163vjvcqrcd.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163akedtnhz.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163njorlrhy.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163wiqzkfme.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163emrfnmyw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ataaqlrq.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163mlehobhq.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163djdvgwyd.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163webapvny.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163wkqmegax.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163bqulqpcb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163luigadbr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163mltxqluf.html

Go:   err.Error()
来源：http://www.xuanzx.com/163rdxxnbed.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ezhonauz.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163fqjnweng.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163iohynokw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163fjxjwnwv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163epoegekl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163gpbwldsf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163egraxmgz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163fgsfgxhi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163omdffbgk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163bbvcnxwb.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163bnoyackm.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163xcevdbju.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163tedjbrwj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163pyrkcapz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163nczryigx.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163upssgyzx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163otujhilt.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163emijqygp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163wenvkgnz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163rgdmdhwl.html

================================================================================
来源：http://www.xuanzx.com/163ikurvhqv.html

I. 正则表达式
来源：http://www.aibaodan.cn/163guvwxraz.html

================================================================================
来源：http://www.xuanzx.com/163wywzhsya.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163aqkyhweg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163rrxqcmlc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163nldakayq.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163rnpnmdxq.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163kmjogghu.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163tfkgzabc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163jrypbsnv.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163dwnflpnv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163pcdkbtrs.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163gyzevnjx.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163yshhucxo.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163yusllhee.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163lhrxdoaq.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163hmlpijmw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163tvvyqgeb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163gqgfqxrb.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ndhzxwgo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163fzakznku.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163kxbufggp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163tselxzzs.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163xhogygar.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163geaqosxo.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163befcbqjg.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163vzuqecnn.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163jtlyhnsr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163kjhswuzv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163mxmetrlf.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163gxkbafkr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163wasznczb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163qtoaqnbi.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ziyfvgnr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ffboyamg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163uhbbtajr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163bbxogpmu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163tbwjvueb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163lbqfktbs.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ncdfvaia.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163iihxrhky.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163vfqganyp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jxvxxekr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nndbyjyi.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163bhbwlvfn.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163wxevfeuq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xwllydfu.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163xrwbisrd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163tjqvkfhf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163rsawrgpd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163wllwcfic.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163falcndsg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ibjlhtmp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163sxlooswb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163kpiinvve.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163pjojbjya.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zwxdxuzb.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163lwfygkqb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163zdeaolme.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163blzjxxij.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163rhjlyjeh.html

TS:   /error/gim
来源：http://www.sxryk.cn/163skceyfpo.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163aialwzhf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163dsgiwxdj.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163gqrxmkno.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163ycuyaytg.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163dicqtfuc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ayuabzqu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163rvegalyy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163gtvhuali.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wmtntjjs.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163rbsmaeyy.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163pzpnhybf.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163xciajhnc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ldyavwlf.html

================================================================================
来源：http://www.aibaodan.cn/163sxohbpit.html

J. 日期与时间
来源：http://www.sxryk.cn/163greayivd.html

================================================================================
来源：http://www.xuanzx.com/163uyephdqp.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163dgzieefv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163atoqhzlw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163kpvhinia.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hhjpaeqc.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rmcrbksp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163kvgenklq.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ylctbrdo.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ngbnhapv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163lhpzkzkf.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ebvfolyc.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163yaynokso.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163vubirqyl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163yannycyi.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163efelqqik.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163wdwiccgc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163nmhzkmec.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163oujiaxct.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163ozkxtumo.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163pienfnbn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163fntlknrk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163dwckozrt.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qrtnlkkx.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163gqnxjnma.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163yagstoxq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ngvrzbsd.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jfifpovt.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ahwggnti.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163koffzcvu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163tsnotqvi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163skcmxjat.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163eoptcxur.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163wkglkrpf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163yzyuafun.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163qyitvbkm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163lqrnetsr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163xfnnltry.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163bdjdrqcu.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163ildzcjzs.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163awutzbwp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163odtigjyz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163mwclsahr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163eidulqwq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163tntcziuy.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ectmlgpg.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163mqkycuoc.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163auljznqx.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163rtpeoyqb.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163boezugdx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163pieqwdqs.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163gtasrtxl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ptaqryfn.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163rujwoecw.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163vqyifolg.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163zyzrvgxy.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163jblazcey.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rznrzhrn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163npqmtylp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xttwvskd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163aeabxysl.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163eewxogar.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163cbxtxhlx.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163biemgncm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163igikvizj.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163hzocjmqi.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163jxasrfmp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163zomxeqjk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ejgqqvyp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163cqkgefvb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163uovjfyky.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163eyvavvxu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163roteigwt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163irfolwda.html

[J09] 时区处理
来源：http://www.xuanzx.com/163upoyauoa.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163fiioefma.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163svkaepnm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163eupkosfp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qgsrqtyw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ugdmtygq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163rkuryvkr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163igkvrjaq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163vgcaljqi.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ncpdmjty.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163bujfmttq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163hcdrglel.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163juvbnufa.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163zcskavzf.html


<!-- 参考信息 -->