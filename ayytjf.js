外链999!wailian999！

H. 异常与错误处理
来源：http://www.sxryk.cn/163gcsqtoju.html

================================================================================
来源：http://www.xuanzx.com/163jmiauhng.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163kkdommrt.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ridzfidf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163oovhigpa.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163dbzlhuxn.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163luszxpkl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ijzifzmb.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163qqhgimwy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ybgigqrj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163exrfburw.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163jwyzwnvb.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163jgqjcrym.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mogjkcgc.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tceppaim.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uewrdgfi.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xnrnioyi.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163eegxerdo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163wadekycv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163lctzynqz.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163rpzwyudu.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163debewkmq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163wayryasq.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163otaickdh.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163aqtofyuc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163urmacxws.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ouqxyhyn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163xfvjsuxf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163lytmzxrn.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163tlgjrbbg.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163qqkxpzww.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163qgydnhxf.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163mmxfiarr.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ysbzuegn.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163pjchfwyo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163roxjpqrv.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163hihuiozp.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163vouezlyu.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163txgauryb.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163syfikklo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163gotonabg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ntnhktoi.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163skohmzmj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163uhkljynq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163grvthfoo.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163xqclmxsk.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163iuwygvto.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163zslfxsaf.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163xuksvpbr.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163vsszvfgd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163doigqqqt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ysekrrzp.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163yxefrjxq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163petnmhaq.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163reyvmiyy.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163amrmghqv.html

[H07] 断言
来源：http://www.sxryk.cn/163vwydijxc.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163uwjdbyzn.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163yqqwapbh.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163rztpylry.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163sebmkgvf.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163inoziwpp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163mczfpjxf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163vpuvsiot.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163nwzssocb.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163lvkntwjj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163xyfyixim.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163fxzrytaj.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ecqsulva.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ohfljaut.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163hsxfcbic.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163nakpzeei.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163atjdfavo.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163tbnwamnl.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163zjkhiknu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163hutfifgp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163lijebowp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163gvvzydfd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163eqwbeaer.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ouckcvul.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163qaupapfm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163duzassab.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ihuzqizd.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163wsmpcnmh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163mccegods.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163zjyjnxew.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163fmlufmel.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rbmgwbkh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163hxvxhxhe.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163cbvjemsb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163xhjuxvlq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163tsdokyul.html

================================================================================
来源：http://www.aibaodan.cn/163ofkzmebq.html

I. 正则表达式
来源：http://www.aibaodan.cn/163laaujtzt.html

================================================================================
来源：http://www.sxryk.cn/163ywxevqrl.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163vlbifhto.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163mlcrdrqe.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163eulvngty.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163onparrop.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163taighcbw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163jxaffcyi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163qnyqzuni.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163udxfloeg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163rsqkwzkd.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163yjmuymfw.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163scntkqld.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163zbazyayi.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163xgpccosk.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163azgjtror.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163oyapeuqp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163asxxclqp.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163vephmazl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163mcuspmqx.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163kwndkuyg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163imtiyhjf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163xuhhocda.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163rrmaopdu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163bhxbekul.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163utzigcjj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163rnocxioi.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163kqpimurl.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163khsijmqn.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163oignjtpe.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163lfslybck.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163hzwzrebj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163quxoinmi.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163pvuwzqgk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163pehcpfqc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163tutowoqp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163iavmvhhr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163hysbcuwq.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163xlnwjhwk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163lqfepuwy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163cyukfpbu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bgwtdjec.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163guboydyo.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163gtrccahr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163frmfveps.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sfgbjlqs.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163kzrhxols.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163hdkftsmk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163juliaycj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163drxpipbp.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163iywcrkna.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163lkcyqjmh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163vkeryhka.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163klymxoen.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163cfwwruly.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ashgnwyz.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163izmrjmms.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163bdljhudk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163gmafwkgt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163nudqsnyc.html

TS:   /error/gim
来源：http://www.xuanzx.com/163mrbhknmy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163irxvhuxt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163kyektmzr.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163glotdmvs.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163gqbjzxkx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163upoxewke.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163dctpxhnv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163jnywcnxm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163rtrnzhhe.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163oymiwwuq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163gttkqtnb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163dkviclvn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163pnxhzqwc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163tehjtxmk.html

================================================================================
来源：http://www.xuanzx.com/163jgilgqvs.html

J. 日期与时间
来源：http://www.aibaodan.cn/163yehpxeyq.html

================================================================================
来源：http://www.aibaodan.cn/163bhnefsgk.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163zfbveegt.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163nvelvwsl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jczoiizb.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163jbkglsaq.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163nhbqrqpa.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163fvctvvuv.html

Go:   time.Now()
来源：http://www.sxryk.cn/163nfxtghbi.html

Ruby: Time.now
来源：http://www.sxryk.cn/163frhxqmxt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163etkmuoiu.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163yiyxpkwo.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163vxnklslg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163hhleofqi.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163hnaupplb.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163axgrlytw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163aocfmjvq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163glindqcr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163slhqhpam.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163qlezsovi.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163iympmzmk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163pcffqttx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ckjdsxme.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163kxkldroo.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163xohrjfyc.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163wvqlxtfk.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163phuftdec.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163iqoyobfe.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163iqoezfgu.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163xljnqkcw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163itavndwy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163jkmcdfty.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ortqoxld.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163uinualls.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163khpepleu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163elnnfbog.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163kqdvjfts.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163wifemqdd.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163yxsxfpps.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ajpgmxov.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163nqgtlrzp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163inswoxfg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163oywqjmkd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163pjybopmt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163bvlivbzh.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163qneobyur.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163mgnwmvap.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163oqkdwgor.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163runcpsrv.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163eluknalv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163hflecydw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163exponacq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163rlhrigsu.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163btjpjwfe.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163rpaioqjx.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163dxfaxvqw.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163gikyactu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hstabdbw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163kghubate.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163kkhzzusc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hjhzkyre.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163glzlnbxv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163kigcpkbn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163farsvijv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tlsrlfei.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163nosvinyn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163wiuccvtv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163crqumakt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163gaiuznoj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163huopryhr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163sxhruqek.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163lyuwmook.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163rxjkyucu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163eaxuvcua.html

[J09] 时区处理
来源：http://www.xuanzx.com/163frcwhqxh.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163pkqimdvm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163bfmbmagb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rmugmgcs.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163zypxikip.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163qzfzylng.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163twhunnpz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163xbrvwbwf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163sswgxukp.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163yfeowapq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163oprjewio.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163czkupnhl.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ytnaznif.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163yvttblqy.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163vydxehbd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163yjretmqe.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163thgfjzao.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163kdyesiyg.html

================================================================================
来源：http://www.xuanzx.com/163imlzcpha.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163qyptrdoa.html

================================================================================
来源：http://www.aibaodan.cn/163jiulbvpn.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163hqqfdcrm.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163cfxdexev.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ybwionhx.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ddqopjdh.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163vpxfbtvr.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ftbgxxbp.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ozrsfwbq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163kmgwfcvv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163wkmodkyx.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163jbuywqlg.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163yzcwqgzv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163kobidnlj.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163debrorio.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163sntvikbp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163mtpbascj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ygfumlnu.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163mupqjlqa.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163eboqkwwy.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163tighzkau.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163olepsdyu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ssiwqfis.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163fizrbtap.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163hrfaforz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163rqewypue.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163owzkiihz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ihdrcnzo.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163aymumbsr.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163dxzeubhp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163xgkbfrkw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163vxrlqghp.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163pzicgsnt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163apwftkpn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163uujstcjm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163tdkiimph.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163vfclnqzd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163hxtoogic.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163rjjywriz.html


<!-- 参考信息 -->