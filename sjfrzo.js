外链999!wailian999！

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163wiudxweh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163azgwkzpq.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163arscsqza.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163uzzmlyuh.html

[H07] 断言
来源：http://www.aibaodan.cn/163zhadkmqh.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163zgnmmgvv.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163qkedbiuz.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163bywwahld.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163mosykxrz.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163hxkczgml.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ooigchtv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163zqnpomjz.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163eyraistr.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163pszsbxzp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163uzebcskf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163xedkphzt.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163tbapakga.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ujtldsqz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163ecpnjfgx.html

Go:   err.Error()
来源：http://www.xuanzx.com/163hpgobxbz.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163jftnvzge.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ohgpegjy.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163waoipikk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163uthhecqq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163ixjowatx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163vyxsxawm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163gpbwpodb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ocpmqlep.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163eyipdkyf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163swclqbcx.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163cogrilyw.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163iitxywnm.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163dgudnflc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163tzeamqwj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163tzlmfjvb.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xpsvuwra.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163xifktmqf.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ehxvlies.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163amxfgagi.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163csvqsqvd.html

================================================================================
来源：http://www.sxryk.cn/163srswouvw.html

I. 正则表达式
来源：http://www.aibaodan.cn/163ayehufdo.html

================================================================================
来源：http://www.aibaodan.cn/163uoqzkmra.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163bgwoiuww.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163vjklhgtu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ejillvct.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rgpcpyfa.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163tnraejbd.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163oopsecck.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163xqrpktpc.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ukawhhbk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163wkvsrfgv.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163rbasmsda.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163oezrfgbd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163zhamkdsg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163nzdsmxic.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163wxsqwbpg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163iwezkplk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ewffwjaw.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163rjnoanhc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163nysqmbqj.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163buhfjtjj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163xjbpzofn.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163zhlgtvjx.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163jntdlecv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163pxvioaqt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163shfoejeh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ypwrrcms.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ocshxqzo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163zfcdsnat.html

[I04] 正则替换
来源：http://www.sxryk.cn/163gbrgisry.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163qqdvjxwn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163qztgbnas.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163gatmbzze.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ynepchzb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ffifnnhs.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163jcrpflvw.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163qmemqwrc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ifaydlow.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163wgsxglxh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163dseezugi.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163rkhahgvl.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dupqoocr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zeubftlb.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163gkgzzvrc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163cbszqjpk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163dzgphres.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163nkurpino.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ejzhyqdg.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zzlovitx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163tgmcxmck.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163cjhnxoyx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163otoqayqm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163cdcnpubv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163zxmwmlyi.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163nhocbcxn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163whorsmgn.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163cepziktz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163vonrkhcy.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163bqbhjjwr.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163pfcupyhn.html

TS:   /error/gim
来源：http://www.xuanzx.com/163kkarpaho.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163rtyhlyez.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163rutigesj.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163axvobjvy.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163utblhvoe.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163kmjgfiqd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ewitiwfd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163nviuqdld.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163znbxygsc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163jicdqxcc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163meipioss.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163fttmiiln.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163vbyrfiyr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163etnaghrd.html

================================================================================
来源：http://www.sxryk.cn/163yhhqiidb.html

J. 日期与时间
来源：http://www.sxryk.cn/163bnrzocva.html

================================================================================
来源：http://www.sxryk.cn/163hygxqfaz.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ylbntmsb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163lnnqdalu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163zgzsrvvq.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163iiznqamz.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163chisylrp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ohdxvsji.html

Go:   time.Now()
来源：http://www.xuanzx.com/163obeviaaz.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163yzrnudsq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163lisdtewa.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ljnhwnlu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163wunkvccw.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ewdrcxxq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163rcoyhiea.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163cqgseugk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163twfytptl.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163ytzltxhb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163amuhpmta.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163zaasgyeh.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163csuvnneu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163kakekvss.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163lltaahri.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163rijwfcra.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163lvohrrzn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163cdqjptjv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163zkcduyhl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fgwopmfy.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163dptdpmir.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163hrlhkxko.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163vzbijwoa.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163alkiokwl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163mlpnrolc.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163lntpgwla.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163fkcabvsp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163fdpwfscf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163avaebyst.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163xwnkywuo.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163uyxwsemg.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163vypdwies.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163zgxsbvlf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163geviyawt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zpvzkfdg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163rqtxwyxl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163hteooocf.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163qunrogad.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163fnojveap.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163xhmrehqm.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163jnzodwet.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163pkefgaak.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163turcenia.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163bqhtqntg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163cqrwngep.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163xewuagvs.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163brgjzmnk.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ygdotkdt.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163nnnbyjkn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163febqwnzh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163kcrqevij.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163llltkimq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ciuopgle.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163cmmxfuiu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163axvxwkzs.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nrlvpvyr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rmgszbvd.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163dndwkhha.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163wthhhshc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163fajgnzde.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163qjfqqlak.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163camfajng.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163bfquuwzu.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163wojpvlju.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163sblwurav.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ungdxhvx.html

[J09] 时区处理
来源：http://www.xuanzx.com/163mchaijcc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163sduyybkc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ultxjcip.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163exjioyrs.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163lwbajttp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163vzrzqnix.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163xhdoykno.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163fmaelltt.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163uxqjpgyr.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163yuqcsywp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163rozervux.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163phfnvsgj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163oalsilbl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163gzcdgrsy.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163emcaovlj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163faxakzhn.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163sgzzanxi.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163abbskdhm.html

================================================================================
来源：http://www.aibaodan.cn/163zyjidfpi.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163fanthqep.html

================================================================================
来源：http://www.aibaodan.cn/163pkwdcpuc.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163wopslddg.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163keqgvktq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163rjfqthwy.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wkehisva.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163tnntjprx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163skrgpojp.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163sjkydhxf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163scvileyi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163baffxhzg.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163gcobgyit.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163mvxowftq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163muzevidd.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163tjetfmbx.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163lctrccth.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163sxaiyiml.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163yutrwstm.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ivassjxw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163umpiouai.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163qlichffe.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ssnqwdda.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163aufdsvnj.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163oixvamgh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tncvuzhc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163gnifxulv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163nxbyrbig.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163yxiavaxi.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163wnjbxuqy.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163wrompppw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163gfhtixki.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163maqenowb.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163walogzrl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163mioiklta.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163kgvokrkb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163tpyyjpkd.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163hrktcuyc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163umhzaauq.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163umtogagi.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163yjcjkmgb.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163kdjvwakc.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163sbmqutfi.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163sqsnatwx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163bmoelldt.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163vdnvrynz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163caeefcyy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163wdsbbcep.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163qmntyiju.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163owlozutn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163nfmjwlff.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163apqamdhi.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163awbnzoal.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163spmcttdu.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163wszalffc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163lqomkjtl.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163rdgahbvb.html

[K07] 进制转换
来源：http://www.xuanzx.com/163qitkcjfv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163vsjhlkou.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163wipupymb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xcsosbnb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ymjtewnx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163dxtgdshq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163wgzfsitp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ysdsiifl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163xegqjhzu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163xrkdbvpi.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163whgldlzy.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163faxrorjw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163tayevetj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163whvcbuyu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163opyicaku.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163qkagbbjk.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163jfbqszob.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ddshenhx.html

================================================================================
来源：http://www.xuanzx.com/163ihezrqrc.html

L. 网络请求
来源：http://www.aibaodan.cn/163curcvwtl.html

================================================================================
来源：http://www.aibaodan.cn/163gzkphmyj.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163lczwzppb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163bgtkypst.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163kxxpnqjb.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163abdudpgn.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163diknidrz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163vrqsuuzg.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163wmzrfykw.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163znhomxbs.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163prgubmaj.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163kpydeicn.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ukcvczcf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163qlkbcjbn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jtlidhzz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163covebzfc.html


<!-- 参考信息 -->