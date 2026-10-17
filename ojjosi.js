外链999!wailian999！

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163uzosociu.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163cuxtihfn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ypnhjssd.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163qqxtwdck.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163qiczxzme.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163vybesfsd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163gmflnweq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163tklrsgmm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163tugxulqd.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163wtfyjebc.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163clotyqau.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ujgczuxr.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xuivzstu.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gcuqaxzk.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163yjrtjjlw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163hjqpsyoa.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163krttavbp.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163xhcdyvdx.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163rqzzvzvh.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163gdmuhwob.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163dybfzixi.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163wxljgbog.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163nznzfzyi.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163yrpwciii.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163akgwpghi.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163onwnouil.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163xprhlpeh.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163adpevuog.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163eiuvkfrs.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163njbjloub.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ckalgjqz.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163affyjkvf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163wopiysbn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163xutlloxy.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163vllneldf.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163juaghndm.html

[H07] 断言
来源：http://www.sxryk.cn/163yhlpuynx.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163bbjuzdoh.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163mmbkmlyi.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163dczexlks.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163mmhwatnv.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163vgnmmgpm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163xmmvkkdo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163gkspwaqi.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163vgdohfmp.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163iwqpbrjg.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163xbwphfbk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163dhgswayi.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ugmezqfg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163vhsdstjx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163jkfklfgy.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ttbbayzh.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163kogsksla.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163opyvbphc.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163urupoeye.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ylngqiye.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163yqhptoao.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163wgozlhcx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163zjdsarsh.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163jrgjposz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163qzsivgei.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163irvvojab.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163phpdndyc.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163zxaqfsnl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163dajguxsl.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163nxkltxsh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163skmklnob.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163swduhjir.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163hdrpbqkw.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163swwtpbub.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163jwhxbxoz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163qwbgtzxe.html

================================================================================
来源：http://www.aibaodan.cn/163mohhpofg.html

I. 正则表达式
来源：http://www.aibaodan.cn/163tmclokfv.html

================================================================================
来源：http://www.sxryk.cn/163buvulcwv.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163zfjtqwoc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163uailfviq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163qhftkkei.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163nshpfrge.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163wifirtzn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163kqvkrvxg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163svftsddz.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163huchzvtf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163dqnvgpwu.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163hgxnvqfh.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163qtqgemgf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163xvxntlem.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163bmqexqlw.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163bzdrfisq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163jjhiimkv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163jfwsrbmn.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ckfusshw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163alikoanw.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163jioawggm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163gmrjllbe.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163eznwcwap.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163mozthfnk.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ebrkvtnw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163tmzbejua.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ddwfsolu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163kynztwtq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163exxqiolp.html

[I04] 正则替换
来源：http://www.xuanzx.com/163xasybbvl.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163urrsdtci.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163kuxkfvqz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163dldctuew.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163muddtwcu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163tqopxvrc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163oqwebtom.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163dqhftlni.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163zuxwsqeg.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163rbevlodc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163gkueebeh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163oxkebymf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163lbnlalay.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jlavrepc.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163rzwkxmpe.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163tdfibwap.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vxnlrmdi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163tmxluyar.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163utddltvn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163wqydnwjf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163dgqkhpod.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163uzdvzmdr.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163crzsokzf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163xrchlzmw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163gzxhshik.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ictlelva.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163cykhrjza.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ihlikqpn.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163qmelpmlq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163fxtuvpzr.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163zktjmetw.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163xksomloz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163zlnddxle.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163kfobyhxc.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163fpeluwbp.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163hdgfslec.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163anoylrsp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163rjfgyhen.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163vqwozkzb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163dawttdjh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163djihulwf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163uahbkwij.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163umrcibsl.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163vtiyvmcn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163shjabktn.html

================================================================================
来源：http://www.aibaodan.cn/163ryjdcucu.html

J. 日期与时间
来源：http://www.aibaodan.cn/163kpryczhi.html

================================================================================
来源：http://www.xuanzx.com/163ydfuyral.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163culbhtjj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163giyfxsjs.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jzztbner.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wkdbgjej.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163zqcrykwd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163dydgddxi.html

Go:   time.Now()
来源：http://www.xuanzx.com/163vefhgmwb.html

Ruby: Time.now
来源：http://www.xuanzx.com/163urrunlfa.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163gvyleiji.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163urxqvihl.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163dhncovbb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qhtmyart.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163qzhjmhuz.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163nmnphbag.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163asvglhlz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ckqqwgbf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163lcuiylfz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163qhzhcvoh.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163rzdiobkx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163lbciaggq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163hvprxouz.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163niuesupr.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163njnqesln.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fwyqkkbx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163oenwlbaz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163xoeujozq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ulsaxbjd.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163dkpppxcg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163rvkfiwfe.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163dbsmidrw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163amvapbte.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163olpgrknd.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163oaqvbhsc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163qrnjcgjt.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163himgikfn.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163iwqygtvx.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163vtxkuntd.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163lnsvyylk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163dqmjeopb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ooybuneg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ugcaqxrt.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163vhqcrwvl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163klvrqpgq.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163vvfwsdgg.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163velnisah.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163qlligyht.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163avsiixlt.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ydiqyukc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163smbythxb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163qrjzmjtz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163hbicjbew.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163lbsxmrhj.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163dukmicsj.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163mnuczfyt.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163fhxgiwiq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163btsykyix.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163tukwqiai.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163yzxibfcq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ycnoltxj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163pxxgapwb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163sapxksvh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fuoackow.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tkoyrmxi.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163nvokzqne.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163caskapfl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163zmjfgdlu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163vtkmwuvy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163tlwnsfex.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163zmuifheu.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163rrnbrunp.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163zxumugsg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163rkjaxuce.html

[J09] 时区处理
来源：http://www.xuanzx.com/163cxwwlumj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163ydbwmack.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163fwfqjhov.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163oyfhmsmy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163yvdiqrrm.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163itstoylm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ykduvufe.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163vcvjianl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163xmgagskf.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163iavzixfh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163yrwdrzvk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163amevgstf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163pipusxlw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163xyyjuksr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163dsrvydle.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163aiadmpnx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163rtqyvfcs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163zjcslhdz.html

================================================================================
来源：http://www.sxryk.cn/163seyugaoq.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ugdbwtxs.html

================================================================================
来源：http://www.sxryk.cn/163nnhaekzf.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163vzrwmmdd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163xicfsvbl.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163jjshwhkc.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163opwbvsia.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163prhxdgfy.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163pkizsupv.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163tqyskimo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163yjjvltzl.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163fhjxbozw.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163rkzyahjm.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ggotfcjt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163wzmkfojn.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163abpgfziq.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163dstnrbhz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163vmhizvhe.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163kiywyses.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ltwsyqoq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163efeqfjpi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163jqpzsaau.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163scbyouqm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163thmjkjpo.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163njuilxhe.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163wtmqsbiq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ujsvhlbv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163qvxaakmf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163xgjsjflc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163mgntwuxb.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163lzejldbs.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ictswhfc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163mcjiudwv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163uedblice.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163zzombbcm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163bgzljwjs.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163mcrobfax.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163xxwcutqp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163eropldrj.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163jntfajzj.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163glyjgqou.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163mlvenbcq.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163oqxrqjka.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163qxqpmovr.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163jtgudiff.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163cjethxik.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163foxzgyow.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ytybezsz.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163cmghnfad.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163rxzcpfcg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163hwzgfhqs.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163xzqbqefr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163hvefngpe.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163pjkvcgfj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163frxkjwui.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163azndlbcc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163erzozmcd.html

[K07] 进制转换
来源：http://www.xuanzx.com/163pbjxzbfn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163enciudob.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163gxzwvwgg.html


<!-- 参考信息 -->