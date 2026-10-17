外链999!wailian999！

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163pgvakrxt.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163aappffuz.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163jwalyata.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163akpthvba.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163loeusxqs.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163qmgppnsd.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163nukmdetj.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163hrphxsbf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163kjyzcivl.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163oogpuvuq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163cxcwhifl.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163feudcvan.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163sjsgnfec.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163kganwjtx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ijmnagnh.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163thvxkqdp.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163zszyiwxq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163msxmcvjb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163jlfzhoht.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zgsypewf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ukdnfior.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163hcdhejml.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163walrpaca.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163betflrdq.html

[H07] 断言
来源：http://www.aibaodan.cn/163bgtwhdaw.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ojsxtcwz.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163teuctgfh.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lzptkcuh.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163tpajnkia.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163tzeqmvgw.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163nmfwobla.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163izmapvzo.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163zwcizcjq.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163eddwreig.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163nwhsefyp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163wtormxrp.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ngjbrpde.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ypchzejl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163xnykcttf.html

Go:   err.Error()
来源：http://www.sxryk.cn/163qufcrvhe.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163uxrewyyy.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163pyeydfgc.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163tazkucyd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163nbogmpzg.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163myeqbyba.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ammabcmc.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163tozxpcke.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163qfeenfqu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163meomodoe.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163rexlazrc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163zoytuxyd.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163yazusvmv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163bgvgydes.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163aupxwoqx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163cuvcacaf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ezxmijwh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163swtcpzrv.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163wlkqusfb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163ksiclude.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163qbjnvdpo.html

================================================================================
来源：http://www.xuanzx.com/163nddxviyo.html

I. 正则表达式
来源：http://www.xuanzx.com/163tuirbneg.html

================================================================================
来源：http://www.xuanzx.com/163jghxcfne.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163fvqlvnfh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ofskxkdl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163qqzdldmz.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163iyfsgfdy.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163yynuequa.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163gdubswsy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163aonbooxa.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163nehufnnu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ejbdvnjq.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163btqqtbpc.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163vbdzzwdl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163fqkibhes.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163obcwmwgd.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163pcufynhl.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163fixzimqu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163slqhtmau.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163cosyokgc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163txutppyk.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163bsziefnm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163foycufoj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163iiosnwdr.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ydzhbbii.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163bgfjbeiq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163qsqmetum.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163atlrejbx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163rdnzwzmx.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163rlqhosce.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ywusmqvp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ifejdsvf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ntormwvw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163hhkvloaf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163wfnvjvwq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ynywjugj.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163jzrzwcnu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163dcbwbnbn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ibuxsbus.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163spqaouuo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ysjrpjzu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ciervphm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wrssiwop.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163faugjioe.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163wcsyvcwk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163naezcwiu.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163akabokbr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163oaluxkmc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163zgudkshj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163sjxrtpxu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ybgkfvzk.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163gwhaodup.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163aocgkeez.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163tzrgftlw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163jgaosteu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163azlnwacn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163jroruuxl.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163hqnhxwow.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163wbqhvyxz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163okptbglk.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163tuwdkjge.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ktwyjofh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163rlmqtlmk.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163zkkijbag.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163xkqetljl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163eadedrfa.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163yfajqxlq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ubgviaye.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ivkojylx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dqbwhjng.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vbfuvbff.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163gqfwywod.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163vxwfnvbx.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163xcntmqss.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163uetpvojg.html

================================================================================
来源：http://www.xuanzx.com/163hejauqvm.html

J. 日期与时间
来源：http://www.sxryk.cn/163ztiolblx.html

================================================================================
来源：http://www.xuanzx.com/163wrgrypgi.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163jgbidxnk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163mtcaftfq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163xsokxnxs.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163yuntseqq.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163nvubkdsd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163azlyicgn.html

Go:   time.Now()
来源：http://www.sxryk.cn/163sydjbnae.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163avzpkfgr.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163roibblks.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163aggkgzvx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163kxdsdsws.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ugpayqdy.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163qgxnnlli.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163fqzpcxjr.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163staacmxz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163cmgumzqj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163viszemay.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ctayjxms.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163lhvjlbip.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163xvqpweaw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ljndmbyd.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wfywvbhf.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163hglarjlf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163emyyexfd.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163icuabxhp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163gaetzavo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ykqqsriz.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163cpezxcek.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163nicwkauo.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163drjkhznt.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163uwxyuilx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163nustfpvu.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163xpizxipz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ovqpkmsf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163umnlpcmv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163izihwedk.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163hfsjinfi.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ipkunpgc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163oogyupfr.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163mxefrcnx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163itpnzwor.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163knhqwsne.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163afsikxna.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163phzgkoxe.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163izziarau.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163vsmvgovx.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163vtoxmgyb.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163dohndjzz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163akctlprs.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163qihcntkz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163uafxtraa.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163qqnrafuk.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ghfhppnf.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163xspkwrtq.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163lwrovzsa.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163coctuhcs.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163jdqluvpl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163gjwixxkk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wnqxvfph.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163zzwxzpgi.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163grvrkyji.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163metkoqbx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163splwbwav.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163caokysyl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163evedpvkb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163rkmuckvu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163fbtzwdmc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163akejhops.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163wyosanxz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163amvydhws.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163pffkjcqo.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163jcmawtig.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ozvhoquc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163hoiujdju.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163enpklqjv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163papqyqjy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163wbqitjwe.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163esehmxhc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163mrmtgznu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163vtbkxemi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163bsfcnhbu.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163osdkvehu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163qlnzwiyr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163yqghmyow.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163awcktgvj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163dmyqvdfl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163hchpvhnz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163swoherpo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163vnsuceeu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163igueiwdu.html

================================================================================
来源：http://www.aibaodan.cn/163qeexkklh.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163cxedbtwr.html

================================================================================
来源：http://www.aibaodan.cn/163zmvvqtyw.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163aimutptu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ouayxvgk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163pprghfag.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163lgtuigvy.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163dqrafmve.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163zbxwluhu.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163birgtfgv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163jumpgpsk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163udabgglq.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163susejwuk.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163apkxjsla.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163wnldwqpi.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163qjnbkmmn.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ffkzyxvu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163wnnatsjg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163imbaqyzw.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163cznipizl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163lpxkzlwj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163hprcskst.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163jdbibfoq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163sgnofntg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qnvkulji.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163pytolafn.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163borgxkgq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163dhewbcoe.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163lcwflmci.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163sdnrfmva.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163bkewucro.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ntnechfd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163gcyrauiu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163bnbkexvz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163cdqqqzwj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ovekkabl.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163uesvxlvq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163gaxmnvvc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163pzmjfvax.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163jooixbgc.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ugtdkxbe.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163ewwsbmvt.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163iymotzqu.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vqbiawvx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163hbkrblox.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163jotrudos.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163pduuuxdc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163odinxqkv.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163cqtqybrg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163rvfkhsqw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163phmkxqny.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163gxiparuo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dosbaqfg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163owveatzm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163nxfiztjc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ycnsktxb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163osdcgtpy.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163dplujuld.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163dxowmhzy.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163oyovybsj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xatvuzel.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mcfmvrti.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163kldevawf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163oxqmcvdq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163yvskwwmu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163aqheecrx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163pwhghuhy.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163fkktpvtc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163cqxakksz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163gkuxgjvx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ngjjtaer.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163pgwoptjn.html


<!-- 参考信息 -->