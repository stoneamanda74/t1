外链999!wailian999！

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163jebgeddo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kbgdoxac.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tufmnffv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cmvtmljy.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163inagecll.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163dgsyreht.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ivixuuym.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163cfofendg.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ouzoukif.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163pdzlujnh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163yxibqgyc.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163tnxfdukh.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zmlknmxx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ezcqtbbl.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163fmsuguay.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163nbuwdflt.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xiqurpxm.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163gtscrujf.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163lvfipscl.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163htsrpmmz.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163sbmimlpw.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163dkuojuyw.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163hsqnlwit.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163hfdiswlm.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163kywgwfie.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163oeltehqd.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163baufrjwn.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163rtgcsxow.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163odccdcub.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163relcfyuw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163zmfmvmdu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163mqowtjcm.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163yfgvahua.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163evmmequx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163hrigeutx.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163jiwhnebb.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163wbzeuleg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163csxpyhbi.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163txhhftwe.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kgoybfde.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163cfcurzas.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163yyuvwktf.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163udqtwthy.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163dopognlv.html

[H07] 断言
来源：http://www.sxryk.cn/163achvuroj.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163aezohvnn.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163sezylewi.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163lgbnrzgg.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163veqsofwp.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163iyqusnoq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163rlodomjx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163rwyftxge.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163namkargu.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163xpidyqng.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163xrrhjdyd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163rpvtidvv.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163rmkzfxmp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163wrcilfyg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163sibyftjv.html

Go:   err.Error()
来源：http://www.sxryk.cn/163gxowmcar.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163dhetzgbe.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163cgjpzjmy.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163tkjhiigj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163ryppdwcn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163avlmtodl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163tqvcsgqp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163qzkoawnl.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163plyfamny.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163kpiznetb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163kucripum.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163wcucaywr.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163qqydtvkt.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163yxtokvdc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ousqcttv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163utijntei.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163neipgcbp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163lmyjezka.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163xzbdeliq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163stcpappw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163hlwzgwmf.html

================================================================================
来源：http://www.aibaodan.cn/163cijqfhqi.html

I. 正则表达式
来源：http://www.aibaodan.cn/163mywwjmxw.html

================================================================================
来源：http://www.sxryk.cn/163vnjebenk.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163pncsacdy.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163tkptpghs.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163qmlzdrmb.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163mfextvvk.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rnbgieyn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163fjivriyr.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163gjnfznxl.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163onhkekfy.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163mumjefaf.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163wpvujrto.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ocxsyvos.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163oiraspyq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163misbylph.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163gmwmvewt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163alegjjuk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163rmatdxnp.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163iupvjdvv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163opxmtait.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163bxnjwmzl.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163jaoqtmce.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163byurbnwv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163wagvvytf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163qdwjpdet.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ghxvxxiu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163vfusahfz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163uzuugklx.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163rvdpvqub.html

[I04] 正则替换
来源：http://www.sxryk.cn/163fdcgkzfv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163iqtgcjla.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163yapwmcpe.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163wvynmuoa.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163risltfhw.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163kghcrres.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163wndltfsx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163nhotbrwv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163lkbqvwva.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163gsqvrezx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163gtpkjhvv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163igojoxod.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rshtreyk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yatyzsnl.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163nasoglfa.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163lsqvrdtw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xbpxmyvz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163njfsfsoj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163btwxzudz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163lerdfiaf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163zxqlksla.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163fqfnazzt.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ybltvflx.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163eontdzzb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163cpzfssvl.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ungpztmn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163scicfmtc.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163fvsfyrfp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163lhzaygas.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163hqrvuelr.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163chhduthc.html

TS:   /error/gim
来源：http://www.xuanzx.com/163uwkauxso.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163yrnosuyo.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163txpelbkc.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163uasqngxk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163izlkupff.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163oocodhlg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163iykzjlli.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163djaudvxq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pgdmkvsi.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163uwsvxuxe.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163kygsmnxf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163bgtbaxuv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163gbbdinoc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163fumvxlxj.html

================================================================================
来源：http://www.sxryk.cn/163ltghenlr.html

J. 日期与时间
来源：http://www.sxryk.cn/163rhmuvfwl.html

================================================================================
来源：http://www.xuanzx.com/163usndgnst.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163tlidcvzb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163mjtrbrsy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163wpzzhqfu.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163qcmhjjaa.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dtkebtkx.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163qdxoitif.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163gllrfxgv.html

Ruby: Time.now
来源：http://www.xuanzx.com/163fxwoatfa.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163kuvolsku.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163rqseliht.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163xvqbtnuz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163vabyaoym.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163skgnpuvi.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163qlrbygia.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163oeoxygkd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163blglyhbf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163pfrpojoj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163dnjwcgwd.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163dezzbciu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163izveqttk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163mxdufhqb.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163lfggoeaw.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163kjwctgwo.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163zxqblcrw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163jlainrye.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163kxreznjz.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163vptcwdhs.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163teqpzzer.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163bamenlig.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163idttahjx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163dqkvfpgg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163hjnkzjed.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163gabutwyh.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163hhkgixgh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163uwtulqwk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163wvegvmsr.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ggkfqffm.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163bbthrivm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163nbttqyuz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163snppdmnd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rbenpydw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163qebwbaze.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163efaemvkv.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163qnarrfmx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163axpjbxdq.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163etrqbgbi.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163vcknrxnl.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163hpscnhda.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163midjanmd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ckfoayau.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163xcwywfdy.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163eapnddts.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163tbjovkoz.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163gkxierie.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163aqsgotxi.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kvoomdqt.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163bmaybtzw.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ucnxsnnb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ixwksjlu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163dpmdzdbr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163okjznlsn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163krlhctxk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pfjkycgk.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163gdkzqbgg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163jxvqdgpg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163nhrmeczt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163hckpavvc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163beotsuzl.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163oieborzp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163hbcrlbhr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163fgtqqvbg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163xhppwdhr.html

[J09] 时区处理
来源：http://www.xuanzx.com/163llwbscnx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163kokzznzk.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ojjwozbd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163etyikmgf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163iiyikbtm.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163jalalwde.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163snlxutap.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163qumszoqs.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163wkraualq.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163khhfyhvb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ctqrjstz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163lnebpgoo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163dykrqtcb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163onjpoaqn.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163kutholcz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163yjkuikpi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163scwftzoh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163snxyzzxf.html

================================================================================
来源：http://www.xuanzx.com/163rvwppomc.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163yxtubdnh.html

================================================================================
来源：http://www.xuanzx.com/163fqgiyjom.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163iwyryecy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163tuxaztyk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163sdijbvmi.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163gocwlmuf.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163sgthuxpc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163opxgduts.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163bdcrakwm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163oaijwaho.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163louwwkqj.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163nbkeyupg.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163bkkbjpxm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163njfqgkye.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163rmiomovp.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jwtukaqz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163ubhkgtvp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163nyfqczht.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163pkvttofo.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163qognhmyh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163jjerpvcb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163xnmfmwtu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163esrlbtox.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163wzcqkyfy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ghhgfkqk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163bxvpgkbq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163aimzzdcv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ymrpfxxh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163fwsxpbsf.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163dlcxobwd.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163jzssqjur.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163nwgkrvzl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ojczroau.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163zixnqbty.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163swpdvgjw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163carzijsm.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163faywdbci.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163jhnmbmiy.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163mkaqzsyi.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163fnvmxxox.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163qiifrdfg.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163mmmvvwux.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163nlgmgdsb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163tahlcfvi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163itpdymia.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163oeiuzdpr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163avrdhtnq.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163cpgyuqzg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163catxbboj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163pfyucvxc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163lwpiyezg.html


<!-- 参考信息 -->