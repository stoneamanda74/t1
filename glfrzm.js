外链999!wailian999！

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163gfbhqlut.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163kzzxhctn.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163iotulkiz.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163yxnprnzh.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163ilspfpmq.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163viahpaic.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163xifrkipq.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163visnwyqi.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163jshtljrh.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163fvhoymyj.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163xvcdincz.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163npqqovby.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163fqzkrtvr.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163kwfbmqhh.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163nbqztmpe.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163vcqtqnsl.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163zctjbeav.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163gdspatgj.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163xqnebuyg.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163ivirxupb.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163bfrpdycq.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163jjecqklz.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163storbkea.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163lnqtqxxm.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163iotepzov.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ulqojnvi.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163sghafuph.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163blzngxoj.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xkduvbpk.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163qkclogzt.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163zlsfmpzr.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163lllbdxrs.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163ygnwtlai.html

Py:   len(s)
来源：http://www.aibaodan.cn/163wfzzwnai.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163rvktmsev.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163vwnxxxfv.html

TS:   s.length
来源：http://www.xuanzx.com/163facfjjji.html

Java: s.length()
来源：http://www.aibaodan.cn/163ftuldcyb.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163crxqoxbt.html

Ruby: s.length
来源：http://www.sxryk.cn/163nuojxfrq.html

C#:   s.Length
来源：http://www.sxryk.cn/163mdotwwxg.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163uovxhxsg.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163iroxxnik.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163dysqztvc.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163psklpxyu.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ufdiwjpz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ksfeuzzb.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163edjshgpt.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163rrhimogz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163zadbaslr.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163iovutvfp.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163hdacuvfe.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163mufmnwfn.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163iulevjlh.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163bacgckoc.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163xivsdizs.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163cnnosepl.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163wyupqdiz.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163bweouzjq.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163tyaarfmd.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163atlabvfv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163lrzxtoot.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163atpyfvsr.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163mriwrcbo.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163wkonvowi.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163whqtmdoa.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163gkpvvrfa.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163ujbklxyl.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163lusmjchd.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163mugflvii.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163sclgvmrc.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163sqidtgke.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163juvpocay.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163drfgcmjk.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163ayxhjxqq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163eztkuyrz.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163yjdfaxcc.html

================================================================================
来源：http://www.aibaodan.cn/163ygjknclh.html

B. 流程控制
来源：http://www.sxryk.cn/163aazaiwuo.html

================================================================================
来源：http://www.aibaodan.cn/163srdxcjim.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163gdbowlay.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163boipgxcr.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163hyhzmxzo.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163psjxvaon.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163iuhmvpcd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qevxskkd.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163aifwsogc.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163fedhaubs.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vnacludn.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163pbftsppw.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163jmxqkbrq.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163rgnfmfka.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gscxabue.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pgvcqkdw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rblqzsqw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163qpjpadfc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163smbybxxx.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tilztffs.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163exnmofdc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163aiwyagbg.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163goexsvgl.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ufgfztyk.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163bahyivpk.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163zfpgoapf.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163cwtqclyu.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ehpdajod.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163cppbzbhg.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163tcyohduc.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163rdpsbfbr.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163cipvuzaz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163jcvumyhx.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163wolupvsg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163rhijpgfd.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163octjidjm.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163kfjlxrue.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163xakzysie.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163aohyuijg.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163dfbvnnkc.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163fppdmvnv.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163lmvjwfor.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163lhmfehgj.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163zcpjmkeu.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163hgqbgmyi.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163tubjbykc.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163ejxpjmzc.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163krswcjgb.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163msnypwqh.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163hbolcddw.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163oqjjmush.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163erztosow.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163dqzfaxui.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163qhfukunn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163hnhppwoq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163hoaquzym.html

[B07] while 循环
来源：http://www.xuanzx.com/163uonoymqk.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163fieimscx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163gixwyhka.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bioyxvls.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wwzyqnft.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rcwnkpmw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163qkrjyrfm.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163uqqwkdfc.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163goevshpp.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163egvpaqub.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163twefuxoi.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163asjoajmb.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wxekcteu.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ozvcibeb.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dniymzog.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163hiovhlev.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163esfdqkhn.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ajlbymkg.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163flpjviys.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163rvoyksxa.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163agmkehlo.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cvfutxui.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163moxvmxfj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zdadiqmg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163pwrlogyt.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163wplcqhns.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vusbftvo.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163wdeisdaj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163gdfvbqgv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163csegxcwn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163djzktvmy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163grauueqj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163wgbaitrl.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163aiamtwie.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163brrjpiku.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163hfekofny.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163busbbyte.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163kdecyjgu.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163jybyjegp.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163gtadspuz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ftsnmugm.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163xqmmqeio.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163hyjxfefo.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163hlrryiku.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163vsjchuuf.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163jvpwhirc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163lohldocs.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163raefxmph.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kqmbrqjg.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163oeascbmo.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dsynlsbt.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163kdxgetkd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163objvpwbl.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163snwrcakv.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163fzxuwqrx.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163axuwcmqb.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163hqixaiyb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163kpppqsvf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163zypvrwlu.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163emkchbqz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163almrimgd.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163hoemxvcg.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163lafvvjrj.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163iarskyfp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163hhcexqds.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163frrwiisz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163xeqspljv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163cmmunhvj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163jtrhlmal.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163lbyddefw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163hdndtjnd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163scjickhy.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163hgopntxj.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163svkzqevh.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163qvecfkxq.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163zkcesnyl.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163pmaggmbk.html

Java: a && b || !c
来源：http://www.sxryk.cn/163myqyhfon.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163vdnxdqhz.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163vvtdldpv.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163bvohgyuq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163sqywirfb.html

Py:   if not data: return
来源：http://www.xuanzx.com/163hgfieowj.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163cpupnkgx.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163octzehzi.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163efkiefcm.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163lwjarjjl.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163wmufvyvb.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163qbygcgsb.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163umcoexda.html

================================================================================
来源：http://www.xuanzx.com/163fdkogaok.html

C. 函数与作用域
来源：http://www.xuanzx.com/163brfsxqgy.html

================================================================================
来源：http://www.sxryk.cn/163kbadvbev.html

[C01] 定义函数
来源：http://www.xuanzx.com/163lglyftgh.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163msuuookt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hxtaewpb.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163axdjlqlc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163siqfgbpq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wjubvnyx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ocvivexn.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ummtbguz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163cgymcaky.html

[C02] 默认参数
来源：http://www.sxryk.cn/163jxvpehxg.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163iefdgpuc.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163lfeofjcd.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163cjknqbgy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163junmjdtc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163mldnbfnn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163lewvgamf.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163jihtpopf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ufpvnrgf.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163iyfxvrbe.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163menmduaf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ubccwhdi.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163teaxkinx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qdqqzphc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163wfmrvpmq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163woyikoao.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163hcsxxzvc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163vunefmmk.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163zhzfhwkv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163ebdvyesu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163xhuddlcv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163jmudzhsh.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163escalxqm.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163kzvcglfz.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163bqyflqln.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163mktenqim.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163uoaolhzp.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163hinaeees.html

Py:   return a, b
来源：http://www.aibaodan.cn/163qexvnvxx.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163xzslsntu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163rlismyan.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ihvpyoyv.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ycklplgo.html

Go:   return a, b
来源：http://www.aibaodan.cn/163vimcqund.html

Ruby: return a, b
来源：http://www.xuanzx.com/163byhlpoqd.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ynmbidrx.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163fseqsctl.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163elgkgiuc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163augynhem.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163qdjmsqkv.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163rweodgaq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163gnkapejf.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163mcgpcgom.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163nlhbmvko.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163suocljye.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163bvcabqbk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163gsollvzn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163diheawkq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163upjbxexq.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163npcnclpt.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163tugoygdq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163ainoqvzr.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163txucxqyd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ietrptxh.html

[C08] 闭包
来源：http://www.xuanzx.com/163gmywicok.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163fnhyvjzr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163nugfowvu.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163brwesnvf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ktntajcd.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163yldyswza.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ckkamnhc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163pfybbrzh.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163rydhksvz.html

[C09] 递归
来源：http://www.sxryk.cn/163fqltnrez.html


<!-- 参考信息 -->