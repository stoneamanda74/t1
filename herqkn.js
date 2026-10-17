外链999!wailian999！

[H07] 断言
来源：http://www.xuanzx.com/163ujxreomt.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163auefxbhk.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163qhiiztvh.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163jjhjdxub.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163lcimqevu.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ybmuhwnv.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163zedyybfm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163tlcraxdg.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163tpjxyjoh.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163crrcsfhp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163rpbjvzyy.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163tbsiekvg.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163lqcsksyt.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163qqclknnj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163uflecyrz.html

Go:   err.Error()
来源：http://www.sxryk.cn/163dbbyrfqv.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163zopeippp.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163vyxpcywh.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163tniuozkd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163hbhikmvl.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163yosadcli.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163jzyhpkck.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163vhqmmkmg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163xquexrxb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163xlgnljac.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163wtwjcwbe.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163sbqvdznt.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163nqwtmutp.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163kuzkdnbr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163zofgqerv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163eknbiazl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163wdcztjxt.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163bwjkkmzi.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163cebeaaaj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163graunnia.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163xustoaqx.html

================================================================================
来源：http://www.sxryk.cn/163ncfdcoap.html

I. 正则表达式
来源：http://www.sxryk.cn/163cxgdxmnj.html

================================================================================
来源：http://www.sxryk.cn/163kudojksv.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163qhiejbkf.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163iantfbft.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163myvjkbzw.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163osfejvsp.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163tllmytgs.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163awvtzezf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163jzjaytsb.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163phkmyosw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163phonalbl.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163fjshgigk.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163gualdpzh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163drcptiwd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163hcvrymbs.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163jzbujjuf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163ycsljxue.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163amfeqzgx.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163bienkbig.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163odgeekza.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163dptwoxrq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163tlwczofg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163lsdonnbi.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163htlpynjg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163yurghumv.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163sauweixu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163oymyetef.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163rylijalh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163wctudqtu.html

[I04] 正则替换
来源：http://www.xuanzx.com/163nwmfgsfq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163staqzxrh.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163cjefhnsc.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163rbdqhims.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163gzclqgzh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163eivbszsc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163ajnxhbjl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163lqfcopta.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163tsiocbyu.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163knlwjico.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163lffohyec.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163lkbnwvcm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163tixeobsg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163znilrrxt.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ffgrwjgo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163aqgkxzgv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kewyfsdw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163tibqmfgd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163cbokatfq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163rovvtmpo.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163gbfnfwhr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jkpbbfnf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ufvhrbeg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ffqnooxu.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163euhnrlyy.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163tegdcwhr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163mykkyoyr.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163hvlyhifq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ldkrwjpw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163qvwqatuf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163anutczvh.html

TS:   /error/gim
来源：http://www.xuanzx.com/163apzfgecw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163zqyhdemk.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163idveehgk.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163etcoidqf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163ekfctnin.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163kadyofir.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163vrdtnsye.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163pdbroiep.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wdemgvox.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ojkpwszy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163qzznixsg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163qxhlggwn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163iwytirtm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163stgjaish.html

================================================================================
来源：http://www.xuanzx.com/163csumjpew.html

J. 日期与时间
来源：http://www.aibaodan.cn/163guzicmkq.html

================================================================================
来源：http://www.sxryk.cn/163zzmngjzp.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163dvripjym.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ksdctyzz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vzsjmhpv.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163mtfmvimx.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163yijujeao.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163sczkmjzu.html

Go:   time.Now()
来源：http://www.sxryk.cn/163rneqintr.html

Ruby: Time.now
来源：http://www.sxryk.cn/163jbayhwmu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163konznchb.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163rccvqxco.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zkelcafi.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163cxmgkgvo.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163wmcfhalq.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163vzccrpjb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163hvcriatm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163bgfltwbb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163zadthzez.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163junxfvpf.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163kmffjmlt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163jdptnmok.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163cvpdbujo.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163fmoqgirb.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163brayemqm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163spzzngco.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163epjstzlv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163qsioaaqt.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163uufzcypa.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163tlfhgrmh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163liszoscu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163bzirqjsa.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163luadfcnm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163sffyjgfa.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163leacjzib.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163xnplhwbc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163njqwarae.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163bwhrcxrb.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163abprmcrf.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163yjlgropw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163jsrpnhyf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163gydaleau.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qxplasdj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163rzgedwff.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163qgunbzbt.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163myhcuunr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163qadtqlci.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163awlngphz.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163vgznclqf.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163yjovnezx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163jbmhxfmv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163njplrnxz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163wozasxmf.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163pzjfwpof.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163eeftjnji.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163stklrfil.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163akqzkjen.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bjnifohj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163akgtgtzq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rjjwokyt.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ulzwzoxy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163wiqopwtk.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163loyngtii.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dhcnaegi.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dtxqkllq.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163jcevontl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163aoofknkv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163tpzbuhny.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163mxndjxmk.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163nujappsj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ksnwpirl.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163wcltmyyp.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163wlctdivk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ncspzskx.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ksnchygz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163syhxrszb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163rbuluvsh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163czmlxoeh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163yuampoeb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163dqtywlah.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163fdvplffi.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163naruhjpb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163gzrisqwc.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163lkdqkdnv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163eppafofq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163onwqodjr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ytkmyupm.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163mncnpdbh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163pjsntwfn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163lsnhmbdo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163amaecury.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163uwjjwmhj.html

================================================================================
来源：http://www.xuanzx.com/163oosdhmyf.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163bqihrpcl.html

================================================================================
来源：http://www.xuanzx.com/163kuvahhsv.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163vwmtqwkn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163eazafubw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163rlnugrjv.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163fucxncti.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163qaxilnlm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163alqsobah.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163zztqqmrs.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163cnvftjgx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163gojmfqxz.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ykpmkwit.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163qtglmuxe.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163teunfkva.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163toatdnyx.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163zvaubgtg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ogbwefqk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163cydrfozb.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163nzghdphk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163tkecvmkv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163bnlahmcy.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163asauwusa.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163lrjmbmqf.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163meoijzxz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163pigzxdgi.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163okgwbcih.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163eikvaykv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163swoyrugw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163bgzvvrfx.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163hleahbin.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163endetskv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163bkcidrsd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jnnagxxy.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163qojzklem.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163tylimehj.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163mluqiyya.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ebplcbhm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163tyfvfnea.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163pbxpuvmq.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ahhnvmwy.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163scbtvelo.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163rmtrxtnu.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qddxusbn.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163xfwecfsy.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163gdkerdho.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163raojpxgc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163cwhivosb.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163njqkzrlf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ueiswmaf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163rktdoifn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163xxaimxrg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163zcmmjvhf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163spednoon.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163plyxhujb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163jdzpgaui.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163nfxdsvlm.html

[K07] 进制转换
来源：http://www.xuanzx.com/163rykpqvhr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163pkerwtwe.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163diyghtao.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163pphqomqx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163oupznaji.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163arezsueo.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163udhbedhr.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163drmggpla.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163fukkbebz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163xzudqrln.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163fgyiionz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163sgqrehqv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163xymyahrp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163frxwnqww.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163tvmpnvix.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163vkifuvct.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163duhigrej.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163trtsokpn.html

================================================================================
来源：http://www.aibaodan.cn/163hpadobyr.html

L. 网络请求
来源：http://www.xuanzx.com/163tfihxkzc.html

================================================================================
来源：http://www.aibaodan.cn/163kzceqkho.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163wumcbqla.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163epypnewm.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163mmzdifqe.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163twlstmyk.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163pqlgcttt.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163saftlcql.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163jpoyragp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163viiacsba.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163mtlzshvp.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163hxoqubgf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163yabknnea.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163uostsevs.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qoipmdlh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163fusbbdbm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163taraznfq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163tdoladem.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163kluhdrel.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163xzzdeubp.html


<!-- 参考信息 -->