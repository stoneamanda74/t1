外链999!wailian999！

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163wcuifogy.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163jdnfrnss.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163xxvvjhle.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163yeepufvz.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163tduwcehr.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163naexhtjf.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163lxyfisjc.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163bbfymxix.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163vnycnhhg.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163dsgtcuac.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163tzvkquqq.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163kvpnyzwc.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163mdlfoakk.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163dhntpvgf.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163movsobvt.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163hvwpahnl.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163rwekcbwx.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163ijtoxntc.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163ajcfvepn.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163pghsvnmj.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163cjobswif.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163jzleqpvr.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163qsddrhrd.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163nlhrdafg.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163rqdkiolu.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163snztyljw.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163uiwwqbhp.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163gwvdelfj.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ydndpyfy.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163isipptzn.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163agrjhwpz.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ytsjvhhp.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xysgurrm.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163odymdkpa.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163kugifdra.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163lxjsgtzk.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163dnkpxmit.html

Py:   len(s)
来源：http://www.aibaodan.cn/163eysiyrpc.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163cmyfkxan.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163lsrmrnjf.html

TS:   s.length
来源：http://www.sxryk.cn/163wgtmqcqm.html

Java: s.length()
来源：http://www.aibaodan.cn/163iiashjxy.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163lfzhptwi.html

Ruby: s.length
来源：http://www.xuanzx.com/163ivsjpjwe.html

C#:   s.Length
来源：http://www.aibaodan.cn/163ludgrujq.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163srvyxlhp.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163qychdkpl.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163yipywqhb.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163wtyqzpyd.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163mnzqwrdv.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163urslzbkp.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163jgidbgbv.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163itljyccd.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163klvadxni.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163zqfgvnss.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163bnopovbw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163mkhgczlv.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163qjmymwst.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163idrtbrly.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163crqbnkcw.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163xfcevzkf.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163ejwbhsbr.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163ylqhguhx.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163xuwmidzn.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163lvgssdcm.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163cfpjivzo.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ofsjuwvp.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ezxegncf.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163dasylxbd.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163voqvekam.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163cbbumplv.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163gdlungmr.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163cowbilsr.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163gesexres.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163wckneifr.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163wlbnbhnd.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163achmfwas.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163mqbcsujy.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163nomzxtan.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163sbkuanyc.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163xeqbnjzi.html

================================================================================
来源：http://www.aibaodan.cn/163swigafxp.html

B. 流程控制
来源：http://www.sxryk.cn/163vhvgawjd.html

================================================================================
来源：http://www.aibaodan.cn/163vvlmrgru.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163fpqwkrdm.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163iijszqtk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163crwnmufn.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mpzdxgfq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163lpjsesde.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wislhlgw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163qveubikf.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163lrbkwdsd.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xykpyvnl.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163caijwgcz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163gfhmfqap.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163zymoyxev.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163wdaayzdg.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ecmudvsy.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yghwsxpu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163sjhtrvuz.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163qmkitfyp.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bxchnaiw.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163eusiqmky.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163ovjhujbm.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163jtljmmrk.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ntzvnqsn.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163agwmginw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163lxporhgc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163appbyezp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163milmeghb.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163wuzsmokd.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163sbljzigx.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163yxoliyne.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163sxdnwggz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163iwxqqkak.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ybgqlpxq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163rfncxhff.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163gpuikdns.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163nljoiohg.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ldlywfqb.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163ksopglln.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163uqmgkkam.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163fsktzehy.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163bltfitiy.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163nftardra.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163grntkqwh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163knjmauuf.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163yrnasapk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163nykidhhm.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163inwvyrnm.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163llgmhdad.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163tdwkoxkp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163vgbtsrnl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163gxreauwc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163mppuytyo.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ngtdgqli.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163fudtyern.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163tblyohpz.html

[B07] while 循环
来源：http://www.sxryk.cn/163oilugaai.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163zsvjxxjj.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163uvrcghuz.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qxzaienp.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fjrdqxmz.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nhaigehk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163rukyyugz.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163dsnswelx.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gwbponpn.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163vpzofqwv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163wtxpjjef.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163tkkhnhzd.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vrmtbowm.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zknqhleu.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163teecmsdc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163knttnbyi.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163eucvihej.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163aawdmjfc.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163jccxqqel.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163oxbgyimb.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163cvbawset.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lcfzgvru.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xrflsjio.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163iqakfjrr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ipewqqeo.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163dmtwjtds.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bnhqydam.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163dajtxunn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163jkpkxvgn.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163rxyacwpv.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163sxsegclx.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163sgobnzbg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163okiqfirh.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163hgnfmtwa.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163mldsjmej.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163fujlpfdh.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163puivcafz.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163jdvxdiyh.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163bctdhutc.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163hnopewkn.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163wutgljbz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ikcsqfbh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163sfhjwslq.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163wzhnxklo.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163lkyemytp.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163eujyaodj.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163jhnpgqzr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163nhbmhxpi.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163iaerntyl.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163hqdlglhs.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xezeupik.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ekrjdsxv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163rfjzugkh.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163bzrbyiqn.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163bejqmbpj.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163eeigztch.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163dlkadlsx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163qzgihehu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ytlobfaz.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163vuqqxegy.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ndpatbuo.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163yccrirxt.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ztxuehyu.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163keawjnko.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163mrjnihox.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163xhoxzjrz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qslyvfej.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163qbodunzu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ezuxrmqc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163wbgtdoaw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163fktnxfrk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163qsvtbgxj.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163mqtqvbjl.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163bvvcibuh.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163pbpzbvzm.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ushhorne.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163mvcyvknh.html

Java: a && b || !c
来源：http://www.xuanzx.com/163zymimgue.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163xcaiamfj.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163iatyplcv.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ybhjjbxm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163atuttuyh.html

Py:   if not data: return
来源：http://www.xuanzx.com/163mqtovpcq.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163qlycinhj.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163olgkoekp.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163mjpojrhq.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163gptafzoq.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163rhlekmoc.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163svdhdkcm.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163xwxwebau.html

================================================================================
来源：http://www.xuanzx.com/163hstwrqcn.html

C. 函数与作用域
来源：http://www.xuanzx.com/163cgpssrqh.html

================================================================================
来源：http://www.xuanzx.com/163evcmohlc.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163xgqwcuax.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163sjwsdfmr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163dkeqljbl.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163srgnosxl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163clfpsatl.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163djsgbzrr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163vussewdf.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163mybfxtxu.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163texlboek.html

[C02] 默认参数
来源：http://www.sxryk.cn/163nyaenlzn.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163rbfheidn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163jgpwpezt.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163zdnhkrqo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ndchojey.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163dsjeclre.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163mfvbzdjx.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ecqdihzv.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163gubbqalo.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163azfxoqdk.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163sulrdfjf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163sabkkhan.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163zjaiqcvd.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163oqxifrcr.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163sivhxbbo.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163pqbgonmo.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163xvzhndwv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163tjxrgjpd.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163amiihdjx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163jifhfhhv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163tchtwngf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163lqkvjjjd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163urdlxaoe.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163pgvbzzbt.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ibrnfugo.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163sbdvgzyk.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gxmvdpni.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163nfzdrxfm.html

Py:   return a, b
来源：http://www.aibaodan.cn/163tvtbwrll.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163smyjresu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163dlmdkjds.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163vzbrnvpt.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163wakwhlfw.html

Go:   return a, b
来源：http://www.aibaodan.cn/163pycguqay.html

Ruby: return a, b
来源：http://www.xuanzx.com/163xuibrqmn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163moderjsf.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163cudsbdum.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163yirjrznt.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ozndxels.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163kjuxdcec.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163dwhvyxxa.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163rzbkraya.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163yslxmixz.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163vhoiflqi.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163bxugbhji.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163mgxxyokn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163lwlvacue.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163qyhocgpn.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163gwfcufvx.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163uaxlssfs.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163albopubk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163oqhnxixp.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163tyuzvpme.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163eggohcvb.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ndjnlxod.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163oehyfura.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163wgtgtrik.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xcqiosbt.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163otwgfrll.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163pilqldsv.html


<!-- 参考信息 -->