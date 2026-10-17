外链999!wailian999！

[G14] 数据类 / record
来源：http://www.xuanzx.com/163jgtnwxvh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163aahxqdbj.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163buhekseq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163qjctnkhj.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163yejiphey.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163xcvyehmu.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163liglqodk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163cnvtfvhh.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163pllpzeau.html

[G15] 枚举
来源：http://www.sxryk.cn/163oohniggz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163lnivjfyj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163edafncvl.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163eoddccim.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163jhdpuvuy.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163kansxizq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163aepkwiev.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163jhtlxcjc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xtrudiiy.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ldfhiuav.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163wlgalnny.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163cmzuydpc.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163yejfdair.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163mxbmflvq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ueilptdc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ykmsawyw.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ubzvwiis.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163vbsxmpvc.html

================================================================================
来源：http://www.aibaodan.cn/163kfvsemmw.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163cjubzwpx.html

================================================================================
来源：http://www.xuanzx.com/163lnhktdig.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163yfnynzab.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163rzlatkfr.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163tjsekyjm.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163rtifackd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163kmvdkhex.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163yyzootsp.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ugzbiipt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163nyvduilm.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163bjvnwdqj.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163lmxtojyl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163hjknyvii.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ozzepcro.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nkhallgs.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cujcqfvd.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ihtvejfs.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163vcajkdbf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163xomlvvij.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ekmjdery.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163alipzalc.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163joujqego.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163driauuhe.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163mthddlwi.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163gijgybuk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bahazcfc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163gcsjwtth.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163vttikzuy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163wchafwye.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163tktiacrm.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163gknchldd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163fqeamvxs.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ocrfbagr.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163gpxckosq.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163zntkcqac.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163styrcipy.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163nsoxhjbd.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163eezmhgkx.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163yumqwprd.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163iwshgkyt.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163eewwwnxh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163lzlvovss.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ocneyjhb.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163jygojejl.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163anovocvy.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163otooeljp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163pjivpwmd.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163xtmapvaf.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163squngrje.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163dirhmphd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ntpclyog.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163dbrpyjhy.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ylvcsbuu.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163nvaatuog.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163fywduppk.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163yzfiuhcd.html

[H07] 断言
来源：http://www.sxryk.cn/163bygodpzt.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ztbchyhx.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163boqlziox.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bsxqbtif.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163yjqedszj.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163lpnwktyb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163bfsnxunb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163rwezmufh.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ngwqffmt.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163qljohvsx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163yahjdwmp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163gsszcbwe.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163vplhqgfl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ehkdupjh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163qdpvmdcg.html

Go:   err.Error()
来源：http://www.xuanzx.com/163wuauprwg.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163nqupqhgb.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163sihtmqpw.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163umadbnci.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163qrrnrrot.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163aeveksri.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ypuzsbfy.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163wdfrsqvg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163dcwtrghf.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163adwdmyoe.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163rlhnraio.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163pjntcfqa.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163nuiouchu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163wcatfvph.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163xzrjbubi.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dfrgaumc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163izkwqtad.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163bzlermlm.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163bfpepzrd.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163fpoevggv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ixywyfai.html

================================================================================
来源：http://www.aibaodan.cn/163ontjlzcy.html

I. 正则表达式
来源：http://www.aibaodan.cn/163pyqvnfli.html

================================================================================
来源：http://www.sxryk.cn/163knueymaq.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163tmffbjce.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163botegvcx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163yhlsqltd.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ewhznyek.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163jfvnetbe.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ckqmoeem.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163dzdgbcpm.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163lkjuslab.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163necvmueb.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ogjuqghx.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163cmftftgw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ygqqgigi.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163wrestalr.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163wpuwhstp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163macyjowz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163zlnvdvku.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163tubobsdp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163qaxqehtp.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163zgpvcoav.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ervfzegp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163tseommni.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163achruyfp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163nzxajsmx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163eotmaivc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163zlrrjxvt.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163mbwmrpxf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163uwhxylkk.html

[I04] 正则替换
来源：http://www.sxryk.cn/163xjziygcb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163nrauqqln.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163qyejzezw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163cfwgmlqd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163munipyvy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163nhtxojhf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163dhvpqjqz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163kynsmpdf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163yggkfebx.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163evpjrooj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163apxsmmok.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163gmppbrrp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ndbcgscg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xxmoyrff.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163kkrwgwui.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163pbowwjgy.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kdlzgeyw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163affsgkbw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163fdhisvrb.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163eewpxolr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163beywfael.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jbraxpzo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ulzgexqc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163dqrdomwr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163hdapeutj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163cgfydyke.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ufplzwek.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163nubdliqn.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ribfbtnz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163jfrmnzyt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163frzcsyir.html

TS:   /error/gim
来源：http://www.sxryk.cn/163wmrhlspx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163bkknjxha.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163voczbtsm.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163cxkwyfkq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163zqhfymgv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163zufsfqyu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163jmhlvfxg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163lqxsswpk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163gjgucjyw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xxxkelle.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163mjuanxhv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163frihwqoj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163jlhqaifi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163xmkyfsfz.html

================================================================================
来源：http://www.sxryk.cn/163ehisxlgj.html

J. 日期与时间
来源：http://www.xuanzx.com/163pbxgxnit.html

================================================================================
来源：http://www.sxryk.cn/163fekvztmp.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163ueyfzpiv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ljwyofmi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163peofpivf.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163cyvgwdny.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qjqocdye.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163wgozezte.html

Go:   time.Now()
来源：http://www.xuanzx.com/163zdrrslxk.html

Ruby: Time.now
来源：http://www.sxryk.cn/163gjmgetxv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163lzvmxpth.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163tgbtvebf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163vxhkghno.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jprolycg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163rbmxuore.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163hovtlzrb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ovxonato.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163bimcrrul.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163txgvenob.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163inhqxlox.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163pjlzttqx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163pqqyydrg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163mvrkwqvz.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163fegxtvgx.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ayqhhsod.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ftrmhiqj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163nqrzveed.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163miuhvgjh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163cpmyarvb.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163htagadei.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163kqmnqqtp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163pctmevia.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163rkdhmexn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163evtjdczy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163zdpfrftm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ydjknvbh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163hythkrie.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163giutpuhu.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163hldwqqgj.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163mslrqmvu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163nnlvywph.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163lhbecmxt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163cgcorshf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163bpmwurbx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163nvvgviuh.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163nepbdoyn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163rluijsiz.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163vyozbnpy.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ghrwwbnj.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163zssudtpl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163uzmztqln.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163huvcikoz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163gcslmaaa.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ckadfzzg.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163wfvlppwn.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163eshxlsnb.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163mkprtuvq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163gdmhfjvf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163zwohbwck.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163nzlmuivm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rjwywxnl.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ierdkfev.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163jnfjetgd.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163cjrqimdr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163spzlvoed.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163acvaxxqk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163tfjifcaj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163kynganrw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163imrwggvy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163wtzxpkbc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163dulumevg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163vmvrseat.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163gppodzow.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163bubrgocx.html

[J09] 时区处理
来源：http://www.xuanzx.com/163nmlubuyk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163eybinfui.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163mgzliqsg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163opegwsvz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163vnvqbgtc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163kckjutfr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163jptvmvcx.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163onlvujur.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163iqszgncm.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163vbefwtpk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ernpnwpo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163wnhqvzbb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163dqrwznrv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163zhwbbxeh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ixrvizgb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163bojykpse.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163aprlibbr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163wmuimind.html

================================================================================
来源：http://www.aibaodan.cn/163hdjkcocq.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163zwgrkwdy.html

================================================================================
来源：http://www.sxryk.cn/163bejwzbsx.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ksozpmrj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163tzhhfayh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ryiugnlv.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163gkvngneg.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hfqbtcnv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163zlqiqwhu.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163dodtzyra.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163tcknumrx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ayduvmuo.html


<!-- 参考信息 -->