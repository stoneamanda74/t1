外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163eucgoory.html

I. 正则表达式
来源：http://www.aibaodan.cn/163mknjraee.html

================================================================================
来源：http://www.xuanzx.com/163lvwqpmgz.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163jztwrgyz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163rymlczad.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163yyxqarpc.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ckkszqct.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ycwwxazp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163hoizqgau.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163jjyuxjlm.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163vhcaohsx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163wcgjcbvj.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ptsqamvr.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163qzcbvskm.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163pfihxooi.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163zxwszqam.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163dwszpbkh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163rsvltnis.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163vlwlectl.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ijwfopgq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163avxthnsy.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163wtaebpun.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ivlujffh.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163nyeggtft.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163wxwnxnna.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163ibwocqpe.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ftoavvjs.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163aswscwdo.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163dkyelqpc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163gkmzmwtb.html

[I04] 正则替换
来源：http://www.sxryk.cn/163xpupjpfj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163axfzvtry.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163jazhbjio.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163pgczdobl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163midfulyq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163fyttkfjh.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163ppdzdawa.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163renmohrf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163uabcqyti.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163xmfnbycv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163xznywyfk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163bpkadueh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qmaplpyt.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fliwbfqz.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163jldgizql.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163vytknpuk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163tvqblnmo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163puiytoxs.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163brkbuwua.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163bzwvfdgx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163zkqfzjew.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ifjxcqhf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163gdwxxfkt.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163rtshwadm.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163cmsqfthh.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163xyodvyjz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163atwevywi.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163txucyyyf.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ljjmoapz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ikzkugcs.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ogwgpgsf.html

TS:   /error/gim
来源：http://www.sxryk.cn/163bhrncrxu.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163vhhcnkzy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163fzpdnclr.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163kivdaief.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163tocaluix.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163eqrcrmns.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163yhtrzcxd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163xqhfaczw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wztzvdbg.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pndyycju.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163wrnwjbgg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163mdwyulch.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163gaezleeo.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163otrboltp.html

================================================================================
来源：http://www.aibaodan.cn/163tlevykzg.html

J. 日期与时间
来源：http://www.sxryk.cn/163daozbiiw.html

================================================================================
来源：http://www.xuanzx.com/163eevlvnxw.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163vcjxueir.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163jfhnnhmn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163cizsbide.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163nrnpzemp.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hrnxhkeg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ljtffxib.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ayjyqdax.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163mhmdqclu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163iiigxhgw.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163pggwitys.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ttiqzuge.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163uwxexrvy.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163bpdgcejq.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163aagcyovy.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163lbahwjwi.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163pqyterdd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163atdjnchu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163euipyfhr.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163dcdckdtv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163udzggtxw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163muglzwpg.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163mesrhyjf.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163wuajykhm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vaahtkfa.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163imjvdsfk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163rjwhoxmt.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163dhriodex.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163yykwydli.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163llolbjel.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163qwbhrlxs.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ejjnaagi.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163vbnzybun.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163gukoumkj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163iazcqqug.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163irgdrhee.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163dvgptxjb.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163viqjaqbh.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163wzrleujn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163tijkejup.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163kfyngbkv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163hzmunflh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163dkppmieo.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163rmiamjro.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163nqvcfptu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163fneovaxq.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163urbqqvpp.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163vftakoun.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ldqtgvlf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163aqquzajb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163bwcdgsgc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163lnghcoxr.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163nfbiikxm.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ksekduhs.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163tmhvpaxj.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163kyqsvwqf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163uilaxspa.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163lwhblckh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163jijiwrgy.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163svimhxlj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163rcldmqvy.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163rplsduof.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qcbvihss.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xubhgavs.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163pnffkdbq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163tecjfbuk.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163iyhyiwip.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163tdtsxhua.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163sqyncymt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163fqnwojxv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163gdkekavz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ohtgcbsx.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163xvykewjo.html

[J09] 时区处理
来源：http://www.xuanzx.com/163jokhsijr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163waaoxwaf.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163qvpfjlvs.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163scmfbunq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163nfojwamm.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163rptbjlpn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163tfcbjdph.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ddpfpcyk.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163epopkrue.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163eqnpcrxa.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163obilhnff.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163sraugrci.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163myhmkspe.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163umypwxyx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163rinnxtge.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163ocqnmulr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163szekkrvt.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163ohvkxoil.html

================================================================================
来源：http://www.xuanzx.com/163pboiqnaw.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163kthwwiip.html

================================================================================
来源：http://www.sxryk.cn/163sinueqlf.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ulrzmmsp.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163qqooaurm.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163kcgeosib.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163qcglysck.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jsirzbul.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ytpxxohv.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163onjnjovf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163izioavlh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163dktqczbh.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163osfgtwjn.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163xmhvubxl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ioxpudvf.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163bxecthlp.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163lxpbwruf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163vnrjcxfd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163awlzhhkc.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163cyncoftq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163agnkrmfe.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163nmjeyhos.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163cflmyfcp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vlfsswvd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163kielwsyv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163honnpuhz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ifyoveye.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163dtwlmoev.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163nktesnef.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163jckdmgfw.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163yspqcnom.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163bmubaszj.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163bhsqrjim.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163evyggxnv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163efnnondp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163kqnbphze.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163podqxvgi.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163dmsebjxw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163dwbpxqha.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163vknbgnkq.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ofmeqdnr.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163wdyuouxg.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163eeoupixe.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163opvwmvmj.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163gfamduds.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163lwpsvtam.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163psbhixko.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163mvdzdelv.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163wawbuceh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163kribohyp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163dhwyeqvb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163mggzlrrz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ginmlbrl.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163gkidyrhc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163jhscfytb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163aluxsmem.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163erbxyywu.html

[K07] 进制转换
来源：http://www.sxryk.cn/163qadwvccs.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163lffsyrqy.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163nzqviqqg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ezpaqnzr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163czzhxbpk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163prlbgtbn.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163iqpxytwx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163diuqfizv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163xxflgzzj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163fjppmszr.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163gpidtbdz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163wnqqfknh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163rtfayovw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163lijweaqq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163hbypatsj.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163pcklexil.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163xleisfmr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163dwtarxis.html

================================================================================
来源：http://www.sxryk.cn/163ozjzbazr.html

L. 网络请求
来源：http://www.xuanzx.com/163jkeborfh.html

================================================================================
来源：http://www.sxryk.cn/163iymqwjhc.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163rhigelgh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163kjiyjoik.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163sejkxgba.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163gzgonmjb.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163jqktglhn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ihgkoqxh.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163knpezppf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ousesvdp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163yasyhwjj.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163amlmgrdj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163nxhxgvyz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163xghucybr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163rzyzwxoa.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xnhhqvxv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163jzxbvboq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163rpeerlkh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163zdadrfwq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163kfuifpsh.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163kytiyksv.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163lremqqqz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163ozmxfofq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rojsbwip.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163cfkqdojr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163vimcuejd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163czhvzkcs.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163wdowfmes.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163sfcabsks.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163vyjhjtts.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163lsifqcoa.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163bgwbtznk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163nchvaark.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163yoewmmph.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163npcmusnq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163sxaxbevv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163syyyajst.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163bgvoebya.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163yhfdfymh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163jpdqxvoc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163egolsyuw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163mbulnbzz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ndxtvybm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163xrgpbfkz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163dppzzgav.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wpiyrltc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ferfjigr.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ltukbcyc.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ajkwyrgg.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163hgezzlnr.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163ckhdvyrd.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163uhxaakod.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163fnfozfme.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163wkmrbffr.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163yspbfkdb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163dictyfgq.html


<!-- 参考信息 -->