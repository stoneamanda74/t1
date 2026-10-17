外链999!wailian999！

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163msmlhwvq.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163bpwyroyx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163scvwxhbx.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163vpojxrdt.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163gbmwennm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163myvjbcrr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163zmdkbukb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163cwrtxbqh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mrdwtjui.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163vmtxiubb.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163qordpdjs.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163cmevipwr.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163kvxhfnsr.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ytzzglao.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163muzhbbae.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163kylcwghu.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163gopiwdhu.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ikpevtki.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163lafhrzgb.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ellkihtk.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163vpqrjfda.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163cicicbwe.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163puohpfvm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163mqevrhrp.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ridkloem.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163wycrspfc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163quyfitgx.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163kfgotoiq.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163gpdkvgyq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163cuawmgnn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163mrptumku.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163kjpthwhz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163egpcohtt.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163rwjdtzmm.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163hwqgobio.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ohpoaevj.html

[H07] 断言
来源：http://www.aibaodan.cn/163snhzmzbw.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163yecaeylv.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163wfbkpwha.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163rhiuxvap.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163hohrssdq.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163xtgquxmz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163vvpwvtmy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163zpaeyogb.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163jubcevox.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163pydmwuyx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163rmapleuu.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163hgzknpqk.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163jjmgeldc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163suksdkxe.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163jflyjdza.html

Go:   err.Error()
来源：http://www.sxryk.cn/163jiuakfbg.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163chwujcoe.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163nxdsltnv.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163visadpdb.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ghazgikr.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163yubegkrk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ghxdnqlx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163pnmjwitl.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ptkkwoby.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163rfjskmvg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163kykptxgx.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163wxoztbpk.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163figoonvx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ikxglbmk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163iievfjum.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163uuhxcqlw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163fmzppbhq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163epmdfjsz.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163javmbedb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163vnsrjbin.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163rwtgeffe.html

================================================================================
来源：http://www.sxryk.cn/163hruwoqfs.html

I. 正则表达式
来源：http://www.aibaodan.cn/163klrjatcy.html

================================================================================
来源：http://www.sxryk.cn/163bvrhqarz.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ktzfmrgw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163brfiwfmr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163syenhesi.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vcgkfdme.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163qkzztyun.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163xykylcrq.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163vjjsqsmz.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163msvejcoh.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163byvydngw.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163nkbwihkr.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163litxqbrd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163mmrcfdgd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163urzekwwz.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163pmhgrtyx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163pwflchjk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163piszwmdm.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163qvqbqgdu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163fbhxxiby.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163ctvlcbvx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163fdikfptf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ogfyxzwi.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163sbcjnesn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163lveaejvz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163srpcbqsd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ebvngpnp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163papgiywb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163bhnxborl.html

[I04] 正则替换
来源：http://www.sxryk.cn/163fwgxrohd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ybfmxxgv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163gntpzsrj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163omsouvkl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163umaiirmy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163fpplbgnl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163kuxftbpt.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163vcbqlkqx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ewozyqck.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163lhepafym.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163pydybmtz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ddncroed.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163unwejiyi.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kiomtvfs.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163zzinhxch.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163zsavwixu.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qkyypesa.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ycagbanr.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163onqxovqx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163kspzebxg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163qfcfbqrc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163iicwbzse.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163wuyknhcv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163zzaohjbf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163wweefazg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163vknqzute.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163irsesmoa.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163gqposxnt.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163qtrfisbv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163wrbzctha.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163jshvddwq.html

TS:   /error/gim
来源：http://www.xuanzx.com/163hsdksjej.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163avknywzi.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163tevwuebr.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163jpudvrll.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163siuosxoi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163xvfcesha.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163mttyctkb.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163onudwjzn.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ecqlhplx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163lmnbjnpw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163itwjzohm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163tmbkzzpb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163jtghaxqx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163hkvwhosy.html

================================================================================
来源：http://www.xuanzx.com/163enfknqxm.html

J. 日期与时间
来源：http://www.sxryk.cn/163xphxrnlg.html

================================================================================
来源：http://www.aibaodan.cn/163cmisxbno.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163lzmumhox.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ihjrnrvx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163bannqlxo.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163vorznnsh.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ffiiaeol.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163trxrkwqd.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163hlpzezmg.html

Ruby: Time.now
来源：http://www.sxryk.cn/163isfhuolu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163zmeljmxc.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163donenvux.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163imndxwvp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163smufffkk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163qmukqntn.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163kpezychh.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163tfvlkvsk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163qweosqqs.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163vhnfwmev.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163oigdnuse.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163wznurxwl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ukycoegw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163rgfwryqk.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163lnyrheqy.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zpxoxanb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163veovxepl.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163lnipawso.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163xbumlaka.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163tbgjmtdl.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163mtjeiksa.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163epecbznj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163xptrtdyz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163jshlfgsa.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163niowjrtg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163mrjybcse.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163jjwyibrm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163pseliqyg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163xegowoth.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163lxabdpap.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163xmhplccg.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163mrveedks.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163avrxwpsg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ealjzdcj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163dedrkvze.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ikpcbrlh.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163gfhasten.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163qragwojg.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163hucqxoxf.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163thdhazij.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163spncvele.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163vehcyvaf.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163zifdtfur.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163cvbdctja.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163tbptggmt.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163juozfanb.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163xugowycg.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163skmldaiw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kwzpzffs.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163tlrzczrp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163fnbxgpas.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163nfxjbrub.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163zjfwqyfe.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163marejkja.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bmhnhrlb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fvzczsfv.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163firrjzpo.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163brljlwfu.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163nwcwdceu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163znypvupm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ttopxpex.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163tbxpogcj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163cfukzyag.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163frxhxnap.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163zhgeszuk.html

[J09] 时区处理
来源：http://www.sxryk.cn/163euyihart.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ybzbzghu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ngeeiktr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163snqkftoq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163dbkmtxrz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ismbrbrc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163yxcdlpbh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163nacwdqyl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163fzqutjxv.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163osdmdcxi.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163njzeluop.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163mfbbaayg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163xbsujjpn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163myzyagea.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163pzxoijha.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163kygwjhgc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163sqyrpfnu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163aditpumd.html

================================================================================
来源：http://www.xuanzx.com/163iwveejzj.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163wxcuexoa.html

================================================================================
来源：http://www.sxryk.cn/163mlpivepm.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163luzfluee.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163piczkbjb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163bxdhifte.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163wyigirkt.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163nbbtlrmj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163todzfebd.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163giutgwpu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163muboooln.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163flpefjrg.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163tempzukx.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163jnkdchjo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163awkvmzjg.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163yzhzlfzn.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163gnhgapfl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163enyzpzcp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163caqthiyk.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163zvwrihvl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163wvnugidm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163crzyeyvz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163hgufowdo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163jesqvwac.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163paqafbsf.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163bhyoaowa.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163bikmjtxw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163lngrhexl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163nwssokuj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163jjyaevsn.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163lnhucdkm.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163lhfzheok.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163cypjcata.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163qvikubcf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163fberdcjl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163rzrbdrot.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qetiddrk.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163mmiknwxf.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163wcsxzngs.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163oairpqch.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163jqicponi.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163mmjheygz.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163eahhoziv.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ugstwaxi.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163pfpzyexr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163xrdwbtni.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163imdsihqn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ljxcqkfg.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163fovguabn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163smrgskum.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163sgcoydmx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xtpzcori.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163tuzvadjb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163vffqfkbe.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163hnmazwqi.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163alkehezs.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163kqpxsirq.html

[K07] 进制转换
来源：http://www.xuanzx.com/163iyjugdmw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163myyouxvx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163umwjvzok.html


<!-- 参考信息 -->