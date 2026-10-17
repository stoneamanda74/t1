外链999!wailian999！

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163mwmnmtpn.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163pocvcnqj.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163hvvdqshr.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163jnptkqyx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163kwlfyzxj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ihapmwaf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163yywhniif.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163lgilcetm.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163uopywttp.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ufvejuve.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ezfzixiz.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163cypnfesl.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163sdmeialb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163gqrwfyyu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163dfwpazpe.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163emxzxpbp.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ljnviowi.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163fjyxdjdb.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163waxzmfgw.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163tutdfdip.html

[H07] 断言
来源：http://www.sxryk.cn/163peaopiqf.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163lrgewtaw.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163kbgebgtn.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163pfmdajmd.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ukjnelbk.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163yaxhzhpt.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163mgkxhwux.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163rhzjzpzw.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163oirzpkcy.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163geghgont.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163wfirpzye.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163yuhcndrt.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163clkztezd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163fwluwhsl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163djtlvimy.html

Go:   err.Error()
来源：http://www.xuanzx.com/163acbkaiff.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163jxbsvxoj.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163foetbesw.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163tlgthwdk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163nfvknyty.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163wtsiunkj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163uvzywuzw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163uytrhxij.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163uvseyhai.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163quewicdf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ykqqmssj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163uelueucj.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163fgugyvec.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163oglqsfbp.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ffrkybim.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163kdinafty.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ozyapkip.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163xkhfeinx.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ekhddnrq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163ficoipqp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163bfulicpe.html

================================================================================
来源：http://www.sxryk.cn/163cobdnthw.html

I. 正则表达式
来源：http://www.xuanzx.com/163fcqxmuqy.html

================================================================================
来源：http://www.sxryk.cn/163chwhakcq.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163tppglvrw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163moixntcc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163alpwyojo.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163zudatrrr.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163afhuhtci.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163vylknkyp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163gqickkco.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163flljfvrz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163apbdtmzf.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163qupmirwa.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163gqyalazq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163obsiucri.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163nbkhhggf.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163mhfqwoin.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163cbpegcav.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163hngzwmsg.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163wblbdjvl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163eqfxhnnt.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163qixcbiqc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163agozgaho.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163zgwxjlcj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163cunsrdak.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163qgfewguu.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163eetnyrdr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ylqlcckz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163wwvntbny.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163hfqjyptf.html

[I04] 正则替换
来源：http://www.sxryk.cn/163xhipsiwt.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163rlzvarvt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163edgkyrsr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163wswjluux.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163jufkjxfi.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163rwuzlygb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163maqyzvwb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163seitjvsm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163arvdznud.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163gaylklwj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163eladrxit.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163qoihyeop.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mxhjqinh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163cdobzpna.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163cteqfhng.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163wywwhqye.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wvskvqmx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ahdbyubr.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163mqjlixxp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163xyrvbusa.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163vpealozs.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163sjwczijb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163gpfltvyb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163cgbvcvix.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163sftpeupt.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163oltzklge.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tgohcamb.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163mcmzndup.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163tntdwlgd.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163qpfktzse.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163lklvelsi.html

TS:   /error/gim
来源：http://www.xuanzx.com/163neychmbg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163lutqgrqk.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163djjooydj.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163yisduiqi.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163dbbztard.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163tzwywvfu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163vpmodldf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163qbziexjl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mgfucekr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163kambnmfo.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ythgrgez.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163tlnencny.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163axhzjrwf.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ueshozes.html

================================================================================
来源：http://www.xuanzx.com/163xmfcxzrp.html

J. 日期与时间
来源：http://www.sxryk.cn/163xgaucdfo.html

================================================================================
来源：http://www.sxryk.cn/163fbjovgbd.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163hqijrfzm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163wlsltcim.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163mjgijpvi.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163prkqsamu.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163usjniquu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163teyngtxv.html

Go:   time.Now()
来源：http://www.sxryk.cn/163rslqkpzc.html

Ruby: Time.now
来源：http://www.xuanzx.com/163unhegtek.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163oxbitbnj.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163kqccdpee.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163mycgeqku.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163baaxmpuh.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163kwhwcpfv.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163lrydsxho.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ootbfeoy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ubfedwzh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163amruwjqo.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163dbfgnlcc.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163wxdlcwuj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163awbgygyj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163omilaasb.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163nihkpiqu.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163nrfyqtkl.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163qdhkwtuc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163bfnxdgrp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163pofqrggl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163dphahzvk.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ezyggyjz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163dvmdetsw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163eoucgclt.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163pmlnoltz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163vjkzjhtg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163iskvlynp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163txrpzswx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163nuflfjhj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163xaoungsl.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163qbwurwux.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163zoxsptjp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163smqgnaul.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163icmxmisn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ljbfrdzk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163mqevsobi.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163bqwjwcch.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163mguuidpj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163dasxyhue.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163xaemgnwe.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163cclextks.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163kegeokdr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163llqfspvp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ytzxpmmz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163kehenkjw.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163jpevshnr.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163gqbqpylk.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163wtxeftba.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163vuyvkgwq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ivlplmis.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163spgsstbb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163twrdehhy.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xzzkktfk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ivjsoxax.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163bbeyumcm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vnujmffo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163pnfknfoc.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163owddmeyu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ghxizmgg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163fvfgmhjk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163kzefxuuy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163emtknyxp.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163zguklhmf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163rqsqcluw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163nbcqmsdy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163vyjxdait.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163icwqvvef.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163yrvrkknn.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163yjtentye.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163edksjzrd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163dwkeuaru.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ztktyyqc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163imeosztj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163vpstznen.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163jtjgzxwm.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163gazbzfhg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163iccolbup.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163tjbcnrxc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163tunggltl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163auusutyc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163durduuoo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163dkwsxylx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163bzqsbept.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163xezqqhfz.html

================================================================================
来源：http://www.aibaodan.cn/163tibgrnwg.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163znhshbvv.html

================================================================================
来源：http://www.sxryk.cn/163jwnykagf.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ltpfqkfv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163vxujroui.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163gsdqykxu.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163cbjxwszr.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163kovanuio.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163hfxjnrgv.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163pklbbhya.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163qpocimsj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163sfrxdlow.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ybplqgfp.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163vgqcnqyz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163bbehoncs.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163jcmqaict.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163unqxnjjq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163gugxhpjw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163wtqbkkso.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163gnegpymv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163zzbxsdgq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163hiqgnzjj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163pxoseojf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163hcgnazya.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163sijfqqnk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qwapgqgd.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163gpthgrbj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163toesnffx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163gghnbkgj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163fgfvyxrk.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163jqyrfdef.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163koipbfql.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163wlsgfgwu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163cmpsuaey.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163spchcqwl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163pueyidbg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163wwwidxxh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163yaxttetr.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163fxjlqcnp.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163btgftshi.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163fyiknwlz.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163kuejcbmd.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vgvohcbp.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qewczyla.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163hestioju.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163dyvchxrv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163kujxzvfc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163spwatndp.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163onwzeyjk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ciasaype.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163bmhkqdej.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kcbtltdc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ntbeixsv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163bbarcchc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163fkxbfuas.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163hxegtzbt.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163usbqdtwp.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163tfmphotl.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163mmlvooee.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163yfnqhzzp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wvjayehx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163usbqgfma.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163trrsjprd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163prvbpztd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163rzjbexqo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163txjmairb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163nqtisxpt.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163cqbishjb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163nabarvcn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163tpjlvzqo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163gkaizdwd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ntcfnqqh.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ljflfmcx.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163eeckiaql.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163hpvvukyq.html

================================================================================
来源：http://www.xuanzx.com/163uohhmbuv.html


<!-- 参考信息 -->