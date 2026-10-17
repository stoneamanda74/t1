外链999!wailian999！

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163mgsealqi.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163zoyziuas.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163xubeutjp.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vrkssadn.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163wqdjweaq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163lnkxcgvo.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163oqfggccz.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163csgaytjk.html

[H07] 断言
来源：http://www.sxryk.cn/163gvgjxknp.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163lnwbgcwz.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163kgawvpzp.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163fgiuiyre.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xmmhddsp.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163indaadpo.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163dgtfdhqx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163dgwlnlpk.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163hxzqfwgn.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163racufiiv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163wczcaewx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163sakrluzo.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163iryacktm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163awgesmpk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163vwqerrjz.html

Go:   err.Error()
来源：http://www.sxryk.cn/163zdtswtun.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163hjcguwwr.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ziwsqggz.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163zohfatrd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163secgnogt.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163typwjere.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163goiglydp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163fvxtfimz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163qpiqduuv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ivbxuieb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163jffjmbiq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163vvaedzdb.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163lxkclsta.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163tlxyenrf.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163miramblt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163hnfbditc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163iypbgnns.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163gaewumlu.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163gifxahqp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163kxtvweuy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163loyofnte.html

================================================================================
来源：http://www.xuanzx.com/163ddnrqzgc.html

I. 正则表达式
来源：http://www.xuanzx.com/163xpibttvo.html

================================================================================
来源：http://www.aibaodan.cn/163wcfgeuiz.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ddclbjhx.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163belzwojh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163elyblaqu.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163gimzjlyj.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163fymhcrhq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163estcnqou.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163fkwgamiw.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163biogigsu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163csduxbig.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163mpnpdtsn.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163foawmvbf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163kuzimmyu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163cxtqdbow.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163nedoulsy.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163dflzoefu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163znxyhehb.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163istwdjpq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163mncneivg.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163rsrihpub.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163xtftdfhw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163xwdxdjug.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163brycyfzq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163sjreoggk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163usebzniw.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163aieivrma.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163kckhkghy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163qnwrovgr.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163yqleswdb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ippspbgn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163tpzifhpw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tamtyhdr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163nvzntkyi.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163emlelnmp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163yolcubof.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163mqwouoyb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163cfogcvcs.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163imfcehce.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ggghturz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163rlhdxfte.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163esfgvwpu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vngvobjd.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163lqrebngt.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163ampeyiyy.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ebtgrwrq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163xartjqyq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ocbqwnvz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163iunxouyq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163vnpbtxul.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ewlkeozg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163nyhljrwz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163siuktuji.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163qanystby.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163sqjhkkcg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163waihjujn.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163tzgmxvdp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163hhdlszcf.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163iznpcmlo.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163sdglywib.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163lckpfaoo.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163xmahtmdw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163twsryjkl.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163awmgspcv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163xtbhmfxd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163orfkkuqi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163izzunrut.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163hqimcouo.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wtnpjclq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163zoodfmjt.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ytpdwklt.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163dpxshmag.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163eshbvvqs.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163lusuvolm.html

================================================================================
来源：http://www.xuanzx.com/163tpvwtilj.html

J. 日期与时间
来源：http://www.xuanzx.com/163fwhcknnv.html

================================================================================
来源：http://www.xuanzx.com/163daohswjv.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163sdgdhsnc.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163naocrusx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163svfjglro.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163fitqtigj.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163bfdyzxwq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163szjftoyi.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ivmcglyt.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163hnbizgex.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163nerkmico.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163utkuipjr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163dfzavqqq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163wbiifxpu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163mntkwzmi.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163emuapnss.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163siotpkqr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163efuktbwl.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jcdrlbkp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ptxapont.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163hovzgghg.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163oypnctdg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163unuoluac.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zxpxyuei.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163pwzawbxv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163mwcgtbnu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163azkbtpzo.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163thxcocet.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163kqdtxlfh.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163kffmrbfv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163vmetjjbh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163nlkdgutl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163pstdnpnn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163hhgyniyh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163azddgslz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ezxfsvzn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163gjukvybb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163bizvdcnw.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163emedidfw.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163uekvhrgz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163qveeomjd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ylzdyswk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jvuvzfad.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163wnvhrxhh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163bythdfba.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ymzjwpce.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163inwwfpaj.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163bwflqaeg.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163tuzaoqqo.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163yjfhmxhe.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163gogmovky.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ngadeimj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163igizppgm.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163apooxmah.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163qmukursr.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163cazyemjw.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163vnlvxvwz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fhlzlcrx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ctuesmri.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hqvwfzea.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163yrezqppe.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163zlbpovvt.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163bxzmoper.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163yperktda.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qswhxoss.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163eviuaqdf.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ujjzrdyk.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163gqlikvaw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163rxbtzeqq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163djbybtvx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163qzcqugkz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163qymyzgsm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163wfadpeuv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163xavuwlqu.html

[J09] 时区处理
来源：http://www.xuanzx.com/163fmbdwhrr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163wqfthyhs.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163jearbqoi.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163tlxuqyaz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163yduiinsz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163gstagvoz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163fsfhzbub.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163vhngztie.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163lznycydo.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163wfukfhzm.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163bcptfsdj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ltkqotmx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163qobrfoqu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ctlpjixm.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ojlkstly.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163cejtqobz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163loteueku.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163udcckmpv.html

================================================================================
来源：http://www.sxryk.cn/163wqiihhci.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163vzbkbudd.html

================================================================================
来源：http://www.xuanzx.com/163msmkzgun.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163dhwcsalu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163netfneop.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163syqgkctt.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bbxsvosb.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163awpgoxby.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163xrheuspf.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163xsqqqsdr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163iabubsrc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163tipxufse.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163gyxodkgf.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ulejnhqn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163rnxlddid.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163afbqigjn.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ejkrgqln.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163dtkvhvrr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163tkukrpwg.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ufomvafv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163qyymzufy.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163fbqkehhk.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163owbbliiy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mkqisqeu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163psmzthor.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163eyocxtse.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163eecxasjt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163swhdsxas.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163tkeeyywe.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163fdutmdjf.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163kdthenlx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163wzuelzvv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163espuivud.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163srizloqf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ysqowgjf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163drlebhwx.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163yjqpfwuk.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163ibtnrddt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163owycqygk.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163jpixymfk.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163sxftfyav.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163hstibjox.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163pmeupsnz.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163rvooavhy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163igjejccz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163jrfsijzs.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163nlukrwqe.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163fazyobpq.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163phyjvcuy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163tahntgxn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163hmikxlyn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163phhjyajz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163msofcbcp.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163nnaldeyr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163lqmccxzb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163zypiaeqk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163jjtcddoa.html

[K07] 进制转换
来源：http://www.xuanzx.com/163mdimmslt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163szuurrad.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163drbuwwqm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163jnpiezfy.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cqftrkfa.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163smnlfkid.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ibbxphce.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163wcpgfveu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ulehukra.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163njrfssdk.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163qibfgdhd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163bkbbpuht.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ywxnijzn.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163fkhnkbpw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163xshmbcbv.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163faseaosi.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163wybhmsbb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163aoziklxb.html

================================================================================
来源：http://www.aibaodan.cn/163aqmkiimr.html

L. 网络请求
来源：http://www.aibaodan.cn/163kkbjltwv.html

================================================================================
来源：http://www.xuanzx.com/163olziiowd.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163zksxgtas.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163immtxijt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163wgyxapbj.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163qamelicj.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163nemjihow.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163lyvimcjw.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163vrkeowqg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163jhyvwexa.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163wsqiocwn.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163gkwjouos.html


<!-- 参考信息 -->