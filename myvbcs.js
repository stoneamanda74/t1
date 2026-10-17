外链999!wailian999！

[G14] 数据类 / record
来源：http://www.sxryk.cn/163rtsohkud.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163oeppigsw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163ujqnysio.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163xuaxngzx.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163tkaevotg.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163obgeknzx.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163cxolucio.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163moduuhgp.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163tzxfsbag.html

[G15] 枚举
来源：http://www.aibaodan.cn/163okvmxmef.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163hkoipxyx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163xqpffkxf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163lnrtinwk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163luormtlt.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163bahjdlqw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163bbvvplya.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163gfmovqil.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163upqnnhue.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163jdgfdbvx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163vrghnnnk.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163pkcemrco.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163gjjtldhk.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163stcnygru.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163sgpjamxp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163tzdzdtfc.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163fusmxfsi.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163zgnjvhxo.html

================================================================================
来源：http://www.aibaodan.cn/163owrjasyl.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ywfxiynh.html

================================================================================
来源：http://www.aibaodan.cn/163xtqjrkcs.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163rizptpau.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163midhpdgm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163crcgsjjw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jlqglxdk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163xfsbbrcc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163srdmpqaq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163fruysoag.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163wnhjtutw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163uktodkjo.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163xhqbkgkf.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163bpeaahsz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163njmgnaly.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yqkqxcao.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163utjckyyb.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uqnodfjy.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163frjlxtri.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163hkqbeprl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163airtxwgj.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163cujmmudt.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163zlsuhqql.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ghuczudg.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163pwhurfkz.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kaquplfv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163rfizladv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163nbttbbzo.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163zygloasa.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163wmnzrwoh.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163dwokvxpd.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163pqxfyzri.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163gjwibeex.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rlszuqdu.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163nsdnijdi.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ackpmmga.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163vkvyjfkz.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163jmeohluc.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163pbyxxlyb.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163lxnrtlvp.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163reowrtsg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163lbmymnyd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163dmldenuz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163lirnuwiv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163kjwlwvfu.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163kkogtypw.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163kgfswhig.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ubukpwuw.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163qfzpvxox.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163cgkikodf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163croynklf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hketgszu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163apnojlbb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163dpwotwmi.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163lebdbhow.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163wszquifh.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ieiesmns.html

[H07] 断言
来源：http://www.sxryk.cn/163bodnwpzr.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ngvjojvk.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163uqgnfqto.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163egehvdxi.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jerizapa.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163xlawdpeg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163xaqfxeje.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163hqgjygdg.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163agrwtyje.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163nuoyxdju.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163cjgqzvwf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163rejribuq.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163pizftvim.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163xvbsmcjm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163dtzplssp.html

Go:   err.Error()
来源：http://www.sxryk.cn/163vahqacax.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ccnfukus.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163sexfhixm.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163mncazskt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163jrsuonmh.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163npjwjsmc.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163hqtqmdev.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163nvbowvpz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163hycmtenb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163uldweajj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163fhbleaff.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163honaumnc.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163nfcedlon.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163wseqghrl.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163kyqvzspz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vyeyfcxh.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163sligxdzf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163rzfeuuzs.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163qhxghitb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163orslbwpt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163wfssukoe.html

================================================================================
来源：http://www.sxryk.cn/163rtiojanz.html

I. 正则表达式
来源：http://www.xuanzx.com/163mvrdyyza.html

================================================================================
来源：http://www.aibaodan.cn/163sqleranx.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163qwmrikdh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163hxabljle.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163wbqwvhmt.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163zsuluqwx.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163rnebowqr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ecmkowva.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163kikehtuh.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163mxiitwsi.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163beslzydf.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163zswqbniy.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163taktjxhw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163gsxlwnlj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163tlybmdio.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163qxtbksdv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163jczkxpvp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163pgrxypan.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163kvjvcpwa.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163kbfoqeot.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ktrytwvt.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163mltlmakr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163yzrtawox.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163jthspanw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163fmuoiwgb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163fmovsxlm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163wtimirgr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163pfymoibf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163igptcnyu.html

[I04] 正则替换
来源：http://www.xuanzx.com/163yujqnion.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163uiwirjim.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163zsplvmlw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163eoorgazp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163fzigpqxh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163mgbnnhho.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163iyvowkge.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163fjvxfjcd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163hbpfakxk.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163bennafno.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163nfsuunps.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163vdypbonb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wcbcxuit.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163lqzoodfb.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163pagudrwc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163mackdcyc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lhyonlsx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163uwecrdoz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163bclkshko.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163amjhykrg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ttagqibu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ighbnxik.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163qplnufmu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163yfnfafuz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163fyqlusch.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ajxysscj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163drwjghjf.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163uwoizrfc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ploqlycm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163uvgvatiy.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ufwzzups.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163tpwqerdv.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163aohhmowy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163loptnagz.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163tifhipuq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163kddkytnh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163sgwsgyfn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ywfoiagx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163jduimxwz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163plydmbuw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163comwchll.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163sufpozfj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163yuxutmvj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163fdfscfuo.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163cnvuyvbo.html

================================================================================
来源：http://www.aibaodan.cn/163lfsgmadb.html

J. 日期与时间
来源：http://www.sxryk.cn/163rmmlpevs.html

================================================================================
来源：http://www.aibaodan.cn/163nkikltpd.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ilknfzvp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163lqxwuymi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163mosjvnul.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163vonnetlf.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163moncwcrn.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163znelguie.html

Go:   time.Now()
来源：http://www.sxryk.cn/163gmsmuoyx.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163bbanvvno.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163eghmzrwx.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163yzeyiadn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163wgczuubb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163agtmojnz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163xbkoaomu.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163advxlnqt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163prvzdsyq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ndubeksm.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qpwwtuxd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163jprhwcub.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ujotjnrr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ixlfwwad.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163kwyqkioj.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ibxexjrt.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163gvqtilrz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ucfnfggw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163lkvarife.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ctyrxenw.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163gpmjjxfl.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ftqiuqwx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163ovquxphr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163mfqswkmf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163iuiatzhe.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163etjpocej.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163jhqqtmnb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163xxsxjxnh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163wztgobtf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163djggntfe.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163mazubkqa.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163ojitfmbz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163yhnbfthw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qkybdoes.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qdxcxqvz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163snbmmqwj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ysowficn.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163febgyvrq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163xzmkeedz.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163uzwgiigd.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163mdeqcini.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163wufdpqzm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163lmpyigxh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163hokalzcz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163wznzprod.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163acbyrzik.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163alvllfsj.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163kboulxop.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163geyexhxa.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163kcaxhxjo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163zczucfai.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163stgrxznl.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163lbskywna.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163hmdbcuvs.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163kecittgx.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163teajiomj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fcpyydeq.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163yoyoicfu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163cemthvlv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163lrotmhsz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163fssiywjt.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163nbxcjqtg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163wwirqijg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163qcztuxsw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163xaiakqee.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163iselpbdl.html

[J09] 时区处理
来源：http://www.sxryk.cn/163schpfuee.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163wmtbwqrt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163upqcqcov.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163dmrjesmw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163xfofsbjt.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163kljfxlrn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ewioenzt.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163rcihzpbd.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163agxyrhxi.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163zhuqyohs.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163rqollbuh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163dpxgvuwr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ciztrenb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163gtpvdree.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163llsvtfgo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163boxewhut.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163iatbkfhb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163inzrlndy.html

================================================================================
来源：http://www.xuanzx.com/163xxkypdme.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163dvcwhsnx.html

================================================================================
来源：http://www.aibaodan.cn/163hrvxtdxu.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163yrsabkez.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163qmjacjlr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ugtwhtyx.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163gcfmvzko.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163cfspbprt.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163cshwrvjh.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ficfbvbt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163hlsjdzfp.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163xeswspmh.html


<!-- 参考信息 -->