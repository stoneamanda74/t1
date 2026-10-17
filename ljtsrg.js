外链999!wailian999！

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163rrqebcwe.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163syntfkfg.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163lietnazk.html

[A17] 位运算
来源：http://www.sxryk.cn/163lychbfbp.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163kpkzwpha.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163atsscfqv.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ewpnsbmo.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163raxcrdli.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bijpnozv.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vtpppphi.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ubctdqke.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bziyqial.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163drdjhyft.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163ycssozbe.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163umvjkiil.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163zoregmxf.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163hzkduowm.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163motzjuwz.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163tweheqyy.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163wvvmtfvc.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163jieadjlp.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163dwritbah.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163nbwquyzf.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163jqdwlxzg.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163wmhbbdbk.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163zgvqzxhr.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163mmmvopkn.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163cilsimos.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163omdufbtf.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163yspnokqy.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163larzswpn.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163gjigprvd.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163cureljtx.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163ipyfmomi.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163cykaqbep.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163ngbxswkk.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163swlaagik.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163yjqwdwkv.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163zttllfxb.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163zyueluxe.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163wrtjjtfk.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dsownijo.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163xlxdtzul.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163fdumacde.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vlbjymus.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163uioxleff.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163edxuaiuw.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163zlpbdqvl.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163lcquzxwy.html

Py:   len(s)
来源：http://www.aibaodan.cn/163mdgbsgwy.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163nkfzmuic.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163sbeflrtq.html

TS:   s.length
来源：http://www.aibaodan.cn/163mmtjurnu.html

Java: s.length()
来源：http://www.sxryk.cn/163sgkmpmtw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163iaywuqip.html

Ruby: s.length
来源：http://www.sxryk.cn/163nojyyslf.html

C#:   s.Length
来源：http://www.sxryk.cn/163ccprfzzn.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163emuhtirr.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163peuwmirg.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163anhijsrj.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163fgjfmcco.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163fhjsyzje.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163xktklqod.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163foironog.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163exrrlmvs.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163bsrcvlmq.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163dfhhrogu.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163qegqxeja.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163wbqsfsca.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163pberkssk.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163srugygea.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163axcebwox.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163kakvefth.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163lahmmfgl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163wwwsjbnh.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163obxpelru.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163awmotywg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163oulnrzdq.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163geyafvbm.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163urvlxcye.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163bgqwlneq.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163waxtvxdy.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163biqwiivw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163wupkkynw.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163tkblwymg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163znxqzkge.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163hlrhozoj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163tmuohebl.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163zfnmizit.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163xzkvajiq.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163grufwolc.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163qpkbuttl.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163puuuodtg.html

================================================================================
来源：http://www.aibaodan.cn/163mgqxgpdj.html

B. 流程控制
来源：http://www.sxryk.cn/163mldkcpth.html

================================================================================
来源：http://www.xuanzx.com/163usgvkrdu.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163pvhwkwlb.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163ljwcelvp.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163gekjxlvk.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mcamigfm.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rwakgqfp.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163imqjlnzs.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163mqeqxpmv.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163tnangoqo.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163czbxafwu.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163farvteiv.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163owrbkiwt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163evtovyun.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163afnvntab.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zkqkhsmh.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cydjfttf.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163qhhkmlei.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163anpiykxb.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mgfjwylj.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163pbtwawor.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163wzynnain.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163psrgjfkz.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163qlpfpspo.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wkowvlxn.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163cjqanvtb.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163deylnqra.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163huyswpmr.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163uqeylckx.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163rfixibys.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163sexnhyke.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163jzghxyoo.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163hbachmzd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163uwxvdixe.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ymdvyyoi.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163wxsktdau.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163zcyrupwd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163nwhxqwca.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163dovdafvy.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163bjlnmpfn.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163onixfxcu.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163fmhrzotl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163zpdxupqz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163rowpgrab.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163ptcquicz.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163vleaprsk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163mjrmuucw.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163gejedpqx.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163tjbjudov.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163ircnjxts.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ctargine.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163mphyktev.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163lunmpncd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163uqejkljo.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163poqpbwll.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163hjyowlog.html

[B07] while 循环
来源：http://www.xuanzx.com/163cdylsnkc.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163kcwoukcx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ztzddtoo.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fhximwki.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ogkbllql.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163siyzpvbd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163csgwzohf.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163fzofecdl.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ooqymuot.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163nybqqjkn.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163vfvkgmbu.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163jdzdaohw.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wcexlvto.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lhiazcsi.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163okogyzht.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163srvduizi.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163xmbhxzam.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163khbukmxy.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163gzhejkkp.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163lnycghke.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ckaetosg.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ignqotof.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fkmgpjmh.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ipupgcel.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163gufzdrhl.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163kqbpdsoz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163sgvvvipb.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163xsbeozif.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163yjgahojb.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163cuingukv.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163gnqpbsof.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163nuhygwqc.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163fesrkdho.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163bnklrzqo.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163mafcijno.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ltjsnqvc.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163smomkvmv.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163aqetbfuv.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163wtkkgnjs.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163mizpfbuc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163cgcfeyqg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163cweckbwd.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163vuwfuasn.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163lmbfvuzy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163amnccrju.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163dsfdlqbn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163deuiuuul.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163auguklje.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163uxkugrjc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163urvddznb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163euhqwedm.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ccmiufse.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163lyzxzvrt.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163bnisisxq.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163aywenmio.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163dptfjwwv.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163aefysujv.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163uswnvetl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163pxlwijbo.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163treiawxw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163qgwcvlfn.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163fwcmctqh.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163vhrhraut.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163bwopiyym.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163txygszcm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163novzbnni.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ftaazzch.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163jkquethg.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163eoimqolm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163pgkapeiz.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163wiualicb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163hkdkxlqf.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163zsygnnjc.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163pqmxovir.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ilxzmtgi.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163dxtrsoln.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163guhkvitu.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ewqbeyal.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163roiysihq.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163kdrszgcr.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163aejhtldi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163wkbfdpuo.html

Py:   if not data: return
来源：http://www.xuanzx.com/163xopgwwbo.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163rpdvyenw.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163jeskfoxb.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163imkcelkz.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163oqfopzbe.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ggsbgabj.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163tblfsgkb.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163cphamjlg.html

================================================================================
来源：http://www.xuanzx.com/163ntmeiqjt.html

C. 函数与作用域
来源：http://www.xuanzx.com/163zkvgvabs.html

================================================================================
来源：http://www.sxryk.cn/163kiybliil.html

[C01] 定义函数
来源：http://www.xuanzx.com/163smntrack.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163iqcbojlg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qqsmgzua.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163dujarngq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163lphfbhln.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ygszfujk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163svyejobm.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163uikeicxo.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163laghgrqp.html

[C02] 默认参数
来源：http://www.sxryk.cn/163haagvlta.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163hzpsltnt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163vqyfkihe.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163iyxorzab.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163xuliqdli.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ffuabegt.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163kpeonawv.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163pnyvhmfa.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163gyioauso.html

[C03] 可变参数
来源：http://www.xuanzx.com/163wztuqidg.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163cywjinfw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163dpvmbreh.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163iqhqrkqu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163bsxqoxxw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163infwstqd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163nzkimwhs.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163cuitvjpl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163sxhjjqms.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163lcgobttl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163vsgcybml.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ilkkalor.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163jekcpqyk.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163tgondmhu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163xlxrfbig.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ladmrdii.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xeuldood.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dvceuzkg.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163vbbyqiuo.html

Py:   return a, b
来源：http://www.sxryk.cn/163xhpluhhh.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163flriltce.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163qrwtlwwk.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163pnfvkpzp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163kpoprqdh.html

Go:   return a, b
来源：http://www.xuanzx.com/163bbwbvevq.html

Ruby: return a, b
来源：http://www.sxryk.cn/163azjxmwdy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163kidwzikm.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163zodwzure.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163zxlsrzhv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163bqyjafig.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163znhuqxtd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163lsmluafo.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163iknazuvn.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163usimbxra.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163byjnsgyz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163aukdbuet.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ecwsecow.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163lncleaht.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163wtzrusuy.html


<!-- 参考信息 -->