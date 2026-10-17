外链999!wailian999！

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163usmgrfsf.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ieumggcq.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163gbktnpdy.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163fiwbxgjy.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163dlutetet.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163pukncxem.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163vngexcyz.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163hiirbdwu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163cxmabzxw.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163yslatsti.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ifnraamu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163celbpphe.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163csxkkjfz.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163vployphm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163kencbmdd.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163bibpgubz.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163bblvzocv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ydvfbmps.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163imuqqkio.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163nzjpwryu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163uzquauxc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163gowtbmch.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163asnfkjkn.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163dantzfzh.html

[H07] 断言
来源：http://www.xuanzx.com/163dxqqijle.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163tqgimmey.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163kwevvvst.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163rnnsjcxx.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163vfsvcdkk.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163ntgfazub.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163gaffdgnt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ufhzzpgt.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ufvgznee.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163bcoykslr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163fjilaylz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163lvcdjqek.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163vvvfqprg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163bahoxfmm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163wanhqvnz.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163zotcdtxc.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163zxzykaam.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163hjjkdcyp.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ejqaxagx.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163xrsbexzj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163qooglohy.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163kcfixvki.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163boibllzo.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163hexfjbff.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163aqzocliv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163kyxqlwkr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163zopmpvqq.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163dcympniq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163nfczoiiu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163pijomrki.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rxywhpmn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163caqdlsnk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163mythsdgg.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163inevmouz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163xigpfjkv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163rrszfxci.html

================================================================================
来源：http://www.aibaodan.cn/163tngvhhdc.html

I. 正则表达式
来源：http://www.sxryk.cn/163omjaeyjr.html

================================================================================
来源：http://www.xuanzx.com/163twxyhldq.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163vreqowlv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ksxmnvzb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163dthzontx.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qhjymscm.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163kaivpqba.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163qoahbhvr.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163xbuqbncm.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163lwxzmmjg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163wgqroqji.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163tehzofjt.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163rormpmgn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163nfcebsgf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163cyzqhbqj.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ajwlkhsa.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163kubappzu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163gltksanx.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163cyepebmu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163fokpbamq.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163dvpfandw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163nybbfbuo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163vtctudcd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163uoptmihh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163qzmcbroe.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163yhuucfxm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163lflxopja.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163qfrvgtxm.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163cgdyophw.html

[I04] 正则替换
来源：http://www.xuanzx.com/163nuygxsrd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163xremdsxc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ocumxyqp.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163yzqhsnid.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163crocndag.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163xlxfdcnr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163ltamlqru.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163fqslmbed.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163hgpzdrpq.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163azgpjiul.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163lyihfzjx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163iidggtgx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ofnrvvqz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163prstfwfb.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163kdrlxddl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163vgvzsptb.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163glovphzq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163mptgtlob.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163akyidjuk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163agncnjba.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163oeoogzhk.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163zcjhchfi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163lknjkzor.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163rgbztsdq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163cfmvxqyw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163tsyjllbp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zlynqlfi.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163lsxppwtc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163vdaccqax.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163qrojsotu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163vfeqaqrf.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ncqhhjxu.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163lpluraba.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163avdsbsue.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163rmrgalwj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163yivvbmsy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163agboeoci.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163huhrcnjt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163labrmluy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vkfjvinr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163bgultelc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163pgadnjas.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163zqtfejyk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163vnkjjdiz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163nqqzvgns.html

================================================================================
来源：http://www.aibaodan.cn/163kvhidtjo.html

J. 日期与时间
来源：http://www.aibaodan.cn/163rcikckqy.html

================================================================================
来源：http://www.aibaodan.cn/163grlagcre.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163lkyqbzap.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163enuufvfw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163kfyopgoh.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163omolktgb.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rmaerzfy.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163anigcool.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163japfgfgr.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163aubvudtb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163prsxkeim.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163jkwbjmte.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vwwdwmme.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ezfnoaxb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163fgkzuajn.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163jkwplwcg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163shhrcoib.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ektuixjw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ljivyyva.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ppjecijl.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163sryfbogu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163bfudvnex.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163iwagzpsb.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163eaaigvso.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163uzjkftyd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163tblllgnx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163pugkergv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163akxntwwo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163rpflrmcp.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163crsavaqc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163xyrvlqwf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163uvvyoknm.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163nmqouxyh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163jtjzhqyn.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ifsbccnn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163xwzjvvap.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163oatysvjv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163cecbctwq.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163kosmswun.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163atgwufsq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163wsopnqdi.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163khnexore.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163eyhzdfip.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163iywbztyo.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163gpclakwv.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ybsmhkph.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163pwxzywrc.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163yfnuvtva.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163gtuvopuc.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ieunkgly.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163fgavyljf.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163qndhxgmw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ftzhsgtm.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163yavrwmmi.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163uhzuigzd.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ylkqvxwp.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ernwnqll.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163iojlxkov.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163vwzmikkp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zhfpmlar.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163einfliep.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163wgrumlce.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163mwsiqrdf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gigtsblf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163kfaqcika.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163qxuwikwt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163avghqdro.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163izdelkws.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163gqrdpbps.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163swlfqqnc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ipjvzuye.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163qqxjisna.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ymekqypg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163phhzyxsu.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163owqrgyma.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163mntomdaz.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163zzovbelx.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163dgophidz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163cphytlhm.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163nthxicuw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163xuppvtsa.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163quxdbxaf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ltdjqwfa.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163enxgizhx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163zvfkftgu.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163nxmhlduc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ludmjzgp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163azyfhwld.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163gybfzglu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163hhzkivga.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163pztujoyv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163zxjbmqcu.html

================================================================================
来源：http://www.xuanzx.com/163azkvcyis.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163neosdqnl.html

================================================================================
来源：http://www.sxryk.cn/163qxdtosrm.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163phwecize.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163mduirdqz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ulbxqtcd.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163gtbkkaxn.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163mttfwxbm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163dtrhgyzh.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163yzrfnpmx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163xlndbonx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163bzbsioka.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163lymtykqe.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163icgrzxlg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163itptcnzw.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163uckequjj.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ouxsgoum.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163gkkfbvlb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163uxqcfwdv.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163aiioxiuu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163xivswzcx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163khglfdht.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163kxjolnaw.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ijuedtav.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163yofnxoqt.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fffxwdzq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163twinwctw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163agclkfbi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163emubncfl.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163stjytwiv.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163crukdsvx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163epcvectc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163wweuuuuu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163isouwmne.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163largorse.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163eyvinqny.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163rqptivhu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163mmjozpjy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163iteadmtg.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163illmijpv.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163mwtmirtr.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163nyekpvps.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163wroglmhj.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163duenaoeb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163mtppwfda.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163bsqfjykz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163qopmoyiz.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163btazlycq.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163iejshwdc.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163fretorde.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163kjvpewdb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163oicmmjnu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163rlykeowz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163uwpirixl.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ermafrhy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163rfgnamkh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163tvexisee.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163hdajegmu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ddszupjs.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163mkocsjbr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163lzkteqpt.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xtplfyan.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163uyjjqisp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163lohhhlwe.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163uywddshe.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163xfojhbvs.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163okiczqxw.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163wfacqncm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163rzbgbuuy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163rgwrcwjr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163rextylwo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163hmffzlsw.html


<!-- 参考信息 -->