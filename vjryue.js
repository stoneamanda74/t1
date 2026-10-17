外链999!wailian999！

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163zlubrpet.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163wpilujzx.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ryjjfzkh.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163rsedlrcf.html

[H07] 断言
来源：http://www.xuanzx.com/163fjsrqtdg.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ibclmchi.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163qbhxiohb.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jyssdcgt.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bxnmegte.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163siaigixw.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163klyyhhtu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163aoswetul.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163omnhbjuv.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163uqndcnyz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163eqaltdsz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163obiimmdq.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163glzxekmu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ssutuxqu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163snaqxezl.html

Go:   err.Error()
来源：http://www.xuanzx.com/163vgsshtmz.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163eqahehaa.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163cjotpwyb.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163gesmyitn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163wchcmfsc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163emowabwq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163rublkdaq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163rpiftwfi.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163varmwlxm.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163lzcoctby.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163tfnuvudi.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163nkntulqs.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163vrzdgery.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163njgpubaz.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163vcxivavt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163rbwxvtkq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jdwhogfr.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163dyxuqwkt.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163apwfjwrj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163vksdsyzp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163hwamszpr.html

================================================================================
来源：http://www.xuanzx.com/163sitdqwuh.html

I. 正则表达式
来源：http://www.aibaodan.cn/163yygkqdnk.html

================================================================================
来源：http://www.sxryk.cn/163eymmiyyo.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ojseobwh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163zsevhjew.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ybuvnevy.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ziyaruvi.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vvwzntqa.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163drluqegh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163ivtgveox.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163mlebquva.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163goikyijq.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163byeabplq.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163mafantee.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163tgpcuffg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163hskaemyp.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163wvdfakeu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163kqoivkrj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ssvtavkn.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163zymlsuwa.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163cvcdpgzk.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163mdqejwso.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163awfarpgo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163njcbwdia.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163tijmlqmc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163hvqutkmr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163xtkyasag.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163rdynxrwc.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163abnixueg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163finpslfs.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163gguygtrr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ldfahkif.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163bsxnypal.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163xurxftya.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ppvevxzs.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163varpxwud.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163okezmisr.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163oapvemtk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163yivmazra.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ozvnhcsj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163zwsuzvtj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163nsqsjljy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163tyttywtg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163foklzyjv.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163hgxttvfd.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163tqvytpgi.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163flgdcjqo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163imhiezho.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163inpxmord.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163aolpkjxt.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163dausmkhj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163fqjjbugz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163fvwgwidy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163fqdjmauf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163vlpbrgwb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163skdxlarq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163kpmcjoyf.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163btrageay.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163cbppsjkp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163bplnjvmi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163vyjmppzu.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163nneokjpp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163uxveeoad.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163rfqyywpi.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163raexagqn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163yfmnatsr.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163yheeratv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ydbqfccl.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ypsqdlgb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163buyqcsjo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163odbkfigr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ntogtzgi.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163scwwwxrt.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163zdiloked.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163bgiwzqjj.html

================================================================================
来源：http://www.xuanzx.com/163snxlzjyl.html

J. 日期与时间
来源：http://www.aibaodan.cn/163aptertfy.html

================================================================================
来源：http://www.sxryk.cn/163gwjcifkb.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ptxqvreg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163rddujoia.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ydewygfe.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163oainnybn.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ucqoxhmb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163xonxdqha.html

Go:   time.Now()
来源：http://www.xuanzx.com/163xbtacxqc.html

Ruby: Time.now
来源：http://www.xuanzx.com/163kzoohhqu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163yagfyxac.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163wgtlfbgf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163nrvzlmrf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ejgjvcgc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163cuxhooyb.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163yxntjaoa.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163izqztolz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163rslljyuk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163fquinsbb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ugmgidma.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163yrxgrbsg.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163vgxaajuj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ujodmcek.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wkslhkhu.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163irgbmfqq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zsodzmhi.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163hazrngsc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163mypyauyf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163pbexuwjb.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163bnhalalc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163dwlqkgyk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163wqebfahh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163bqqfxxmi.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163aialgagq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163yemrtqxu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163lemrwkrb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163nymnfzrw.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163umegbfzy.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163vcbhtyvt.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163dvblkfux.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163xqvxzyrf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163udbfkluy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qcatdlbx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163qfyxuukv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ynsknwli.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163xlmptufu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ydrxqftn.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163xrgwzjxe.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163kyyisjbn.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163hzyfsrbq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163grkznuec.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ykpgzbva.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163vvfdlobv.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163aerzpwcz.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163prdmgcpq.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163rqfswqyy.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163yoftzeae.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163iozlfmug.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163yovbuonp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163cfhgomvz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vssitchm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ukxuefnw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163efewhkda.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rjykmxgc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dtpnwwvj.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163uhuamdzw.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163smlfclra.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163nyrqcnaa.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163qsuvmzba.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163uznaacip.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ukaecbxw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163fnchcusg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163wvzeoroo.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163jcbhwkec.html

[J09] 时区处理
来源：http://www.xuanzx.com/163hqafnwev.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163fttqzdaa.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163jvqnhjse.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163evnnytfn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163nfgasiro.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163jkyxnvfa.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163adrwgjic.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163lxqvweet.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163csyofurj.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163zbrndlbs.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ekkilrve.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163etuyminf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163yghufsad.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163uctqswsl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163bekgbkmv.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163usmyjrlu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163zwxetjrw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163rkvwukkb.html

================================================================================
来源：http://www.sxryk.cn/163pmjcjqpa.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163nbkoebus.html

================================================================================
来源：http://www.sxryk.cn/163gktulhpn.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163nrcuiqah.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163efialqqm.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163rhymjfgn.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163xpihuygl.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163zqsymkjh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163gldcfdxn.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163rhdcruhi.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163kqdhdwhj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163nkmowwbm.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163sesllbqk.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163foqgyvvu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163qslvbadq.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ejfkzrpa.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zyuvyxcn.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163oilowynv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163xehkhdfo.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163pqrlrcre.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163cusnzztg.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163altdupqf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163hohpmshr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vzpcipgo.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163kxqysais.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163fggdahyl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163qhzbezgu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163mxuabpyl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ehhpwpqd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163bctxysrj.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163tgwsdrza.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163uydcbcrz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163eodfnmfi.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163wqgbzzie.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163nejfalfi.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163zuinohzb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163agorwlkh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163yuvmofbf.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163hghigqyw.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163vaotmszb.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163mqdfirox.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163qjpvbovm.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163fipyaqwi.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ttvxvgqj.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163vyiwjwww.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163hdniqhoc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163oyjlkfsj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163yiktafvw.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163oxfjtotq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163disbuiap.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163zazwarmt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163mtxmvjpl.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163zvdfhmjq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163mwjobqix.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163bnjhrnpv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163csrquzra.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163zawmpzee.html

[K07] 进制转换
来源：http://www.xuanzx.com/163jjiagyjp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ozurqhlu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163onaugpfy.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163vlediohr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163kowharwo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163gomsokev.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163jrijuuvs.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163sjfnhism.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163xxsccvhh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163aricyucz.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163zoklwrrl.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163fdcoovlb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163sxhutsbz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163lagzvxuq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163pxcbctdt.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163rohlrdgz.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163hciskwdx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ndmmpoli.html

================================================================================
来源：http://www.sxryk.cn/163yoybtglx.html

L. 网络请求
来源：http://www.xuanzx.com/163wkwgsorw.html

================================================================================
来源：http://www.aibaodan.cn/163axrtdoga.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163tuvesklo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163aotlmfvq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163weouskpf.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ymuaefok.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163wuwtdxru.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163rzfqtvle.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163unqlnpxq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163xbzrinpp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163utoolrhq.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163wfranivp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163lnikpbzs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163qmblaqvz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163euhpxvse.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163diowyakb.html


<!-- 参考信息 -->