外链999!wailian999！

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ugpqmgzk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163oynafvxd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163mazsjumh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163auvwlylh.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163bezqhffk.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163fvzxuoep.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163dzjdphrg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163oywslugj.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163dgbxxoko.html

[G15] 枚举
来源：http://www.sxryk.cn/163floktdnw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163rkpkiwux.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ftzvihez.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ownizdvf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163nitpbmri.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163uoumtpdh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163tnmemucm.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163peociyip.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ozdkunak.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163tzcbwucr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163hhvkiufg.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163kioinbkp.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163khyckplf.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ezjjcoow.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163knqueilh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163qjlfiamh.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163lzgyquck.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163oxeweqmi.html

================================================================================
来源：http://www.xuanzx.com/163xcbtauyq.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163qlqljvce.html

================================================================================
来源：http://www.xuanzx.com/163untpurrm.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163dwecbxoz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163mynjkxph.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163gqrbnuuj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163lntkebmg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163pefhcyro.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163eehyatit.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163pmeahmlq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163cwltbgzh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163jlsksxrp.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163jnpsalwd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ycvzxyiq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ilqsduej.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nkcwtjpr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nwfqhndf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zxcmsuyv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163vdrxibri.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163kiwwflwo.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163nxaaxjxx.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163rzvrvafy.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ewlseccv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163gpiuavdo.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163kcsoicwu.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163bjizpvnr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ufnubwwa.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163jhsnwwvq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163bdpqcotz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163uajldjyh.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163kalqoxpj.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163mgmuhrcp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163sdzcaxtn.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163nuuxvsne.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ezzrtdpy.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163hknqpgxw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163egrtqwin.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163yhajwmju.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ohafkaqy.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163erdbjjek.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163stzfaoos.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163smuqhetj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ldtwibig.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163fxcgxgry.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163qwnvrvka.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163bdwdfdpr.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163suejhhsv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163uezktrjk.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163hlxtwlyz.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163mkzafmyz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163jgjvdjpp.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163sjjsrzck.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163eniwajtg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163gszfmhqt.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163nqpddwmf.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163bqkpvrar.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163xiljykos.html

[H07] 断言
来源：http://www.aibaodan.cn/163wpmfagkr.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163isfemkxh.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163xvpxteoe.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163clgwdjnc.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163lsugkdbc.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163vuniitvc.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163gzfpddki.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163bucpgnko.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163qqwkcszt.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163guzjvbjc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163uqgtsiuo.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163bpagmfju.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163erzhkhjg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163fdblmaps.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163jlhmxwie.html

Go:   err.Error()
来源：http://www.xuanzx.com/163ugfakgha.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ewdxyuww.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163vppvvpyq.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163azxrdqrz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163fgqhkuxj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163jiuuacta.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163xufjumef.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163qjpkyblh.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163pitypfnz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163rjdlyvuh.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163eozvabbr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163uwjvbtuw.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163eefhlemk.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163jakbipcg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ggnfqzvz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163whavcihd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xkrmuhwr.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ltxzzzzj.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163sxfmmjxj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163pjpwoayh.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163dxtvvfae.html

================================================================================
来源：http://www.sxryk.cn/163eqcsyzvv.html

I. 正则表达式
来源：http://www.aibaodan.cn/163ghgfqzeh.html

================================================================================
来源：http://www.sxryk.cn/163lfdblwjj.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163atafmlan.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163cxfjftsg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163oypkdanx.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rksjhdor.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163aypmevqz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163dskbvlbb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163tyocogaw.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163wnynqrvz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163arpsryru.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163mzjcevky.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163vlrrrmjl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163tjmwimyd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163lhoaypmt.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163chwynrpp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163hkbotqcu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163srdowwrf.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163zglvxtug.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163iibkmqvs.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163cxujsdfg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163yyjaybih.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163thsxgdaw.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ydyxeabg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ugicxlbl.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163dyhbayxe.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163nvudisgf.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163lqznizag.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163zptachdc.html

[I04] 正则替换
来源：http://www.xuanzx.com/163hskgpcvi.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163wngaaqma.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163zevmcpbt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163fdpeggrp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163gmegolxx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ynkqhebe.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163vbyehpaq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163pktolfzs.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163azyupcxy.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163pdtnhqmw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163wcqsdchb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163uixqsomm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hbxezbxb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163dwcbjzzo.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163frbdmvya.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163feoswboo.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mcpsohcr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163forbgtnq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163gkdiwbkt.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163gqpeebff.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163brfmwjko.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ukalgshw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163jznxaxfu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163tiiwvlaw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163cwevotip.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163oerqzfqu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163xmipnilv.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163gvdqqfap.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ichdioze.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163guthmgxa.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163gnnjblui.html

TS:   /error/gim
来源：http://www.sxryk.cn/163dyrrmxub.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163tzfrdnxa.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163rslzoyyg.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163pmhmldzb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163vveecdgf.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163jmmctbto.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163tktbspqn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163vtydeweb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163minidxxq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163uiulphrh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ftmgweav.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163tddacwuv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163febahocm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163aexbopot.html

================================================================================
来源：http://www.sxryk.cn/163eczxeipi.html

J. 日期与时间
来源：http://www.xuanzx.com/163tdbpitcx.html

================================================================================
来源：http://www.sxryk.cn/163heoiafwk.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163sawpnneq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163amdorjhb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163xbrdbwni.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163lsskzexr.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163nrkuyely.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163dcdfvbtp.html

Go:   time.Now()
来源：http://www.xuanzx.com/163sigbwhwm.html

Ruby: Time.now
来源：http://www.xuanzx.com/163aqnwimyc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163djplkcwy.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163bipeoqqa.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jarnmrqu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163pnznkezb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163fminndcm.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163tzzrpcjo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163cwqtdlvy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163oayajaul.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163uasfnhrp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163fujrbasa.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163tvmcugkq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163lsxsioeh.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163tfadfxhw.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163roxqjosv.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163imretxdi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163nlxqeaok.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ebegdpnj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163uazfjokb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163nmxflypo.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163zfynmlqc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163gtsfdzpx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163hzysecrx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163jhkhsywq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163oammgnbv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163pptkvrqo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163fkrkjkqc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163qvuwqzmm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163gdusalii.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163srcjgiyc.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163nuttddgs.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163gftepxxx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163hqdiqvnl.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wqltyqlj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163bfxeamgp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163scfdlxsi.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163dlvexoim.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163qfoerate.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163aljkktts.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ivhenxuf.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163qbicixeq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163meisblwx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ihdjauqj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163nehstidu.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163gqqbxepe.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ytwwpifg.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ebzdztgj.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ltshphqw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163briuykta.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163frwuairr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163iyjlznsj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163vhddbsbs.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163xtzrihzu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163tnbthhfv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163uyvunfit.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nqxolokv.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163klptzhdt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163poszthpc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163fadlteme.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163rntbitbe.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163kekehfdy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163hwudgthj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163zhejrsqi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163gansxuqa.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163gvtlebxg.html

[J09] 时区处理
来源：http://www.xuanzx.com/163dupbzimx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163lqbivvuw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163zxxfchys.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163yfaetqzd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163gishepnn.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163xxihqbyh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163axyguwme.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163uygsapfi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163hxagckwn.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163kojptcjp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163cmfadvut.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163dtcczpbf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163xnejkium.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163fpbabxwf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163umyvnsvo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163tzrtnprg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163iblxkioj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163xnkqcawy.html

================================================================================
来源：http://www.sxryk.cn/163ykjynckc.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163mnmzzhvw.html

================================================================================
来源：http://www.aibaodan.cn/163sdhfkmaf.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163zgoytsvt.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163fzfhdwot.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163psvrxzkj.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163qahfnxyy.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163sibyczqj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ymuwznka.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163cecvpzwz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163erqxrzvo.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163enhipedz.html


<!-- 参考信息 -->