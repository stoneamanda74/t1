外链999!wailian999！

H. 异常与错误处理
来源：http://www.xuanzx.com/163vnefaqts.html

================================================================================
来源：http://www.xuanzx.com/163bfwkuskf.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163hfghgafi.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163mpdnqtbb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163hydjehcc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jbwczulm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163hdezqypt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163lioljhoc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163grupvbyy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163qyvsgqcq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163oodfrwie.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ihvmuasc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163pjltystk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ndcgbqtw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jhwicots.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hkkbfgdp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ysuhhzcs.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163vzbpmros.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163qozznpcd.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163jwlirzfq.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163thgthpsl.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163dgsycnad.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163eirxaqdn.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163srxnsgzp.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163puvdzpmh.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163yjbwqjwn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163nrzkjysq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ayutgcbh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163gwaslqni.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163evbjzfke.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163dpoybflm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163fcmslqev.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163dhqgcprj.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163faowqpxx.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163fgmqrkmh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163pufngqmp.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163epbjcqaj.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163cwqlowcd.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163hadlxonp.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163lmgucybm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163rirqhufu.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163znhdosnj.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163qhyouqvz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163lurafeuj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ratpgals.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163vdjmqgjp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163itpfvpmd.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163zhodxvzf.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163mgusudzw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163btehjcjq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163hczitzwi.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163lphcxqml.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163mwwbzkdj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163xamochye.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163yvqsyllq.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ilagejcf.html

[H07] 断言
来源：http://www.aibaodan.cn/163pumctcee.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163lnycehqv.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163uodeacxf.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ynjxgjzx.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163eroowoes.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163vpfizeck.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163rxidaocu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163wcizzfzp.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163dgbniaen.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163hjysgvrq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163qzkttepu.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163jixlkfiz.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163shnxexmv.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163noqetknt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163pispaats.html

Go:   err.Error()
来源：http://www.sxryk.cn/163kahfrlkp.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ueuyoodh.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163ylpnmqoz.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ccgusaae.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163congdpwl.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ymeucgxn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163tibtbhht.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163wvxlvqpe.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163eyqfokis.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163jzzhpcup.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163opxwjcol.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163vstutbaf.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163fagbikjf.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163dihhajor.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ivoexwvd.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163fgtezrtp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163wlpqralx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163sszbmgwi.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163knmojaxb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163nurppmzn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163scbimups.html

================================================================================
来源：http://www.aibaodan.cn/163ybbjojpj.html

I. 正则表达式
来源：http://www.aibaodan.cn/163ilftszzp.html

================================================================================
来源：http://www.aibaodan.cn/163pelnchaz.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163hauurfip.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163tujfoemn.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163jyzczhak.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163kxpqnkjz.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163mwaouoav.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163opsuasga.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163qntvhrai.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163ctcenecu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163bxyadmgg.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163fmcjyptf.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163zlnnbzlr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163vfitxsov.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163osqoyfqj.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163gptgtmhz.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163fjhfzsnn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163qxgzlxsq.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163cawcbhdk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163drfwjbxg.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ihflpjvu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163fjikuxus.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163jtpdttej.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163soabjtws.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163fxvwuuuc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163wzdhuyxo.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163efgwhhxo.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163vdqfinaw.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163hkgycvfr.html

[I04] 正则替换
来源：http://www.xuanzx.com/163qskaybqv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163wxbgkpvc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163lwsmbaph.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163lkjziqae.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ravitevf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163zucrgrbu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163ladbjazb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163pqokhosv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163yapqwqdk.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163tbulfooy.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163oeawpdmc.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163mxwkmelj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163msjnlyym.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qdgooioj.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163geswnrnf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163vwsfxzdx.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zruganrm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163pwmxbmpr.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163xjtbtsah.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163wazdupel.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163utvkryxc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163etvjfypn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ebsuszrd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163czgquwdo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163tbxaousc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163wjhrvccc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163pzwnqwuy.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163vpbwzqtu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163fltcvqsy.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163utqbprtf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163zwelpbhe.html

TS:   /error/gim
来源：http://www.xuanzx.com/163upwdkbyt.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163wazxulyq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163uvzzktut.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163xrwizuyc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163arqylpmc.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163qykkgyqd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163csyhiyry.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163izhlooga.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163mfalltlq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163hnmntbgq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163prxrchlo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163nvxksfth.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163mnrtmoni.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163lzeyftqa.html

================================================================================
来源：http://www.sxryk.cn/163krcazgkw.html

J. 日期与时间
来源：http://www.aibaodan.cn/163elrsnxla.html

================================================================================
来源：http://www.xuanzx.com/163lmynroui.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163sqsfdgtk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163akygvagn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163swdctbaj.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163lnaqovkj.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163uimnlscm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163jwfumglz.html

Go:   time.Now()
来源：http://www.sxryk.cn/163woklpgaq.html

Ruby: Time.now
来源：http://www.sxryk.cn/163fdxnmylt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163cliyvsjk.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ketnirhu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163rqhjgqzv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163apstfirs.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163hbvnokoe.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163huiybzlj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163mxekuzdd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163npqotcrr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163hhrkqiuu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163hmhceqiq.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163nfjtrjwz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163dhrlvqxc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ofrphhok.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qcjqyymz.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163lfkrlpxl.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163nxxedhij.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163aftdcmbw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163mwjvdyyk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163cckjhjoc.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163eiolbtyf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163psbqfzkd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163rqnunjpe.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163rzhfrrta.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163bcsndjyi.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163wgmfbpwd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163yaxfomkn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163jgenxteh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163vgqcjtlt.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163gdwxzdca.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163zrctdfxp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163nrnajnef.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163iagvujou.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163cepntomm.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163nzxlwdaz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163tsxnhgqc.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ukhxltlw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ibwttyfp.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163kaybocpr.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163snefuoib.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163exmlootg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163mdozeavp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163oscjmwhe.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163mxzkaqad.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163rjojzlzi.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163fdhbzitf.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163mtazjyri.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163fqpvoyaj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bpcaesby.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163typticwe.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ckpyehsv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163mpylaigx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163rqzntnml.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163htweagae.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vkadmntp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dqttjfyt.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163tfuvserl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ngtjbwav.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163dvfodlab.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163oaxriidx.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ytgboxos.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163eaonxcfv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163rxhwgkuk.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ohvznton.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163cnuvbqzh.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ihuzrspe.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163cimowbsl.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163rdoqcavl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163dhkhczpn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lvgsojco.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163keramgza.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163rzbgmbct.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163jmksbwct.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163afhudtop.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163iaidzrzp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163nnkycbyo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ndpipnds.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163qnczgkln.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163upinvhml.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ykjqahep.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163otzgqffw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163ffhxyhfr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163zxwrtufg.html

================================================================================
来源：http://www.aibaodan.cn/163xsglnojp.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163jxesttry.html

================================================================================
来源：http://www.sxryk.cn/163qlazaaxa.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163bkwemrev.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163lsqhqfpb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163wrfdjgae.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163vjppajhk.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163uuxpduwb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163pyvuhtym.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163crlfmfub.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ndieqsrm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163monziwng.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ujdmmzmh.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163iqauvqmx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163amwjdcjo.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163axingutz.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ctjollek.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163jgkbaxgc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ogcvaelx.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163vnyuojqc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ywusdxvc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163vninnifb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163tatweyyc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163nidwdemm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cvjwdcda.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ckpgmwkl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ouqwoehm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163eylpxzqi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163nlyormer.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163chatoyot.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163vhucphir.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163nbqhxzzc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163eekbxehg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163npygukrz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163wvgmctib.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163uestajsq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jmlbfhic.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163djziyybz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163qqsnfkgs.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163fklgpixl.html


<!-- 参考信息 -->