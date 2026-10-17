外链999!wailian999！

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163hquyikqo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163zrlgfvhn.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163spsggnid.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163dppxaoox.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163owzpndmc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163lvzpbfjo.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163abqwosvq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163qbfwbrmt.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ytvjwlpw.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163xhbznmyq.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163fnrbjhzw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163lnefoxeb.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163abyhorgj.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163opgzjspb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163gavokchw.html

================================================================================
来源：http://www.sxryk.cn/163tnnvwugw.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163rddwhvxm.html

================================================================================
来源：http://www.aibaodan.cn/163ppmnhwsj.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163bpdekdka.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163wygfhhmm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163fxedkcme.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ycblqevl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163lvxkhkrl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163oxiopymv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163tsoavnbe.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163aqgpejgp.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163kkwfyagi.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163sqednyjg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163qiocxnfz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163htzmnytm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hrvtapmk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163leauucov.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jzicvxtm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163gumskebk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163azrjsbjv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163qhofbgvq.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163twotxdcq.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163sercfjfb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jznvkkda.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163kouaifgp.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163eimdqqah.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163efxljlma.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163arnodbgg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163lzqxxaxx.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163pqvfpflc.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ecqxxzlb.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163invpzdvj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163luhukgun.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163sbyiaako.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163anzvxkhp.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163axrlnpex.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163tjxalvxc.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163lhnhewiu.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163icrbxbqj.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163gvqpnfrv.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ckymdwuy.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163hyfkuzfs.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163rrcumoqa.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163phiepfww.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163gyzogtko.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163rnzzbnep.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163mzwigjrn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163onmoimhn.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163mlgqqvzg.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163rdeqrbcz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163oztqefgb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163olywmfjf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163lammmvmw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163xenbehad.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163nypbcrid.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163blqisnns.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163fhvfmhtx.html

[H07] 断言
来源：http://www.sxryk.cn/163mojxscgn.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163bkuixrgy.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163vhcwtqwj.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163quvqknhb.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xjbfuskl.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163jiptbbhc.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163feeeysod.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163rihnkvnr.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163djrhqyqs.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163izvjsbwh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163yqzrvszi.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163dytmmjkf.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163wxrgxpwr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163wowjiwff.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163zqemhevw.html

Go:   err.Error()
来源：http://www.sxryk.cn/163ugdpbidc.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163gbmtvsgl.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163aeipfkdn.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163jnfzdajq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163wwzwmyqx.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163yytaulaj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163thfcxleh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163djzrwuyw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163yzwxkurr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163nwtpqipy.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163mqgsvjnh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163zolbdkdk.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163weqbksvt.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163phjxzblm.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163feaebicv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163qlwetkyl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163qjqsqasu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163eobmfxjf.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163vqfgdmqy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163ukjhoyaj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163sykhwgli.html

================================================================================
来源：http://www.aibaodan.cn/163phniovnm.html

I. 正则表达式
来源：http://www.xuanzx.com/163lcuvuqsa.html

================================================================================
来源：http://www.aibaodan.cn/163pdvxtwev.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163avyaqqow.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163wyhqsjyh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163uwskzkpj.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163rssyxeid.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ybqptzwd.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163wvrazbbs.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163hxcnxuic.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163nchmqqly.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163fcntcvgs.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163fesxnxxh.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163offgdmiw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163edjquqpd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163kigowomu.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ucsryknh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163wddqlqdd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163eaitkciz.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163yzlpoinn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163cxxwmilm.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163cnlcsazq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163mbjathrb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163gzrmqnwb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163xdqorpke.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163pzwrtwly.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163paaixqrl.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163kchsdepx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163rnjwcbbb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163uikkkppr.html

[I04] 正则替换
来源：http://www.sxryk.cn/163xcqvsnbk.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163vwbssrwt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163hdmzvyis.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163avtvdimf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163yvvolmtd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163mwwcdmxi.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ldjgaldl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163tsydgisl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ehjyyzkj.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163cnewcxjf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ysgvnpdw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ayyngbib.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163llkzyxot.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163tekqodje.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163xiptlmvk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163hskgtaur.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163njbqzivk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163anduajgg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163fhseqwyv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163nhmemtzu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163mkvadkqu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163niuozhau.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163leogtmhf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163jclxbuty.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163zjmidyxk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163iloyujae.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ezrqdvxw.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163rkyriafy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163fvaeemfi.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163uloxkilk.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163tshtyrjv.html

TS:   /error/gim
来源：http://www.xuanzx.com/163nmhllilt.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163aivjwufz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163dyldclts.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163uzyvjdig.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163puwpirrz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163gkipqjnt.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163dolbemxe.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163lvkipsdd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163izyrmrer.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163qglpbyxs.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163tlmvxicb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163cekedtbk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163iihesywj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ekklzbuu.html

================================================================================
来源：http://www.aibaodan.cn/163nizggrbh.html

J. 日期与时间
来源：http://www.aibaodan.cn/163mptrmsgc.html

================================================================================
来源：http://www.aibaodan.cn/163bxycitzw.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163bijpwmny.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163kcbzurba.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163fmelgusa.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163gdyuhjyw.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163dcyvtxlk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ybrkbkds.html

Go:   time.Now()
来源：http://www.xuanzx.com/163usqnahwn.html

Ruby: Time.now
来源：http://www.xuanzx.com/163edhmfibe.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163yaffuagj.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163csaznwtq.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ssbcmoho.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jchwyyxe.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163pbzucady.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163pysrcvpu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163hpptvlqz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163vitzpsjx.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163cfqpuotv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163rryyjhvy.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163hudvaqum.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163kemttxxn.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163vhedfkhv.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163asryrjxs.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163oarfvsyk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163lfgzxzqw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163pskvdgon.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163qddkntpf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163kedagoqy.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ainacqbw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163nqcysptv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163hmwmkikg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163jdtltwyx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163sprogvnm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163waopoeal.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163jlfmpdwo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163wvfpxxxl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163hzvqekal.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163jkwudqpu.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163urjarfdq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163edfoimqn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163suqhtpqc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163gfhvlmtz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163zxtmohlv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163rkzxgkbp.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163nxicavih.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163jbdmqikf.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163cpfwpzwq.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163uczulynb.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163rbfpvtly.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163aaxvivao.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163vuccqsfj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163wtahvoqy.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163dbsxxbvx.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163nsbzbfdb.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163oxqtrxrw.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163upuckqed.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163olagarng.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163iozvqidq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163djwtwfxi.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163uskanrio.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163xuxcafdc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163wrrgheex.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dpmbzhct.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gxxsmkuv.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163fpwwncyq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163vaktmwzm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163bhovnila.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163midimqsb.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ojdbljep.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163mmivudno.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ldlpznyi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163exvwjjdr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163kjvbqgbn.html

[J09] 时区处理
来源：http://www.sxryk.cn/163cecfsbxk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163wfquguqc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163dprmdhbx.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qyrtjyuo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163faxkihyh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163eclpfqdj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163qihnorfi.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163uapbcudy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163uotspoqp.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163tbtbktik.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163joefxoar.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ccfcdpqe.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163aodenhwi.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163msihurlj.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ktmksgqr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163oxszhgsg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163pcbzronk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163lcactvru.html

================================================================================
来源：http://www.xuanzx.com/163czzoocqw.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163zttfcncp.html

================================================================================
来源：http://www.sxryk.cn/163zwqgcmvf.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163aawhlsli.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jxcckldl.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163kxzwugug.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163hojdfqlp.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163kbxgvwal.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163nqikycna.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163hyysxaec.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163mqqjmifn.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163sysbhicl.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163nkepjoob.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163dpfbyhww.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163uehmaaaq.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mmoabtua.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jecttscg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163qvetbhys.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jxbpegjp.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163uetqbzmg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163tbmojcvh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163uknxeyij.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163nweorbcy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vkboctgd.html


<!-- 参考信息 -->