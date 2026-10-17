外链999!wailian999！

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163detrvavg.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163tfyjbmpk.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xwcfsijq.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rcdwqxpi.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jbdvfpkx.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163sqggqqra.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hgeoahdy.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163kimmclif.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163vtfvgtfd.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163lzxpzuvj.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163lgrqxnuv.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163mrqevqmr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163lcyhftwd.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163qijqmrus.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163wvdqabgd.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163rsbntlys.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163nbkbmhzv.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163wegsnadk.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163jbowfhoo.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163wjrxzucz.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163pwzkiqod.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ukayfgtu.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163ldbizine.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163glqkxito.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163farszard.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163bsexfuhd.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163xbilakaz.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163cdgkpyay.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163qcnkvbxt.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163tjeztimf.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163xosnjnaj.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163owqamlgv.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163vfuixjdw.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163daroaxms.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163pdyageaf.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163mibgxmtt.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163uzurldfk.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ckvmvugx.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163zskzmbvs.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ldvnfljy.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fkgpvjsp.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163edtqhjil.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ubaofxev.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163kypbfeyb.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163oaomoraz.html

Py:   len(s)
来源：http://www.sxryk.cn/163ltumikyn.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163kvebwdaq.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163wxjpyxrn.html

TS:   s.length
来源：http://www.sxryk.cn/163vyjemcjj.html

Java: s.length()
来源：http://www.sxryk.cn/163nyjkidzf.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163fbfkaglo.html

Ruby: s.length
来源：http://www.xuanzx.com/163ozaqcnvy.html

C#:   s.Length
来源：http://www.aibaodan.cn/163tnaqdady.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163injtorts.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163hxaqkeye.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163qdfkfjmq.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163dpwzqvym.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163akpakcuv.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mtnlxujg.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163zdhyvlqp.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163tjqiywxs.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163lxshhdpt.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163njdxxrzd.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163pbpijcur.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163khraqcpf.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163qdbhdjcn.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163irusgfzv.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163bupvofmd.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163htccqngj.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163bclsdolc.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163mugqzihb.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163yqkobaii.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163xctvnykg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163oxpxvepv.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163nwffhouv.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163qcftnpym.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ebrsgupn.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163qikeydzi.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163kgdvgcot.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163rrufdoaj.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163pagewgpe.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163ewbvdgas.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163bdwucfkp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163ksfkvdyj.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163qfxrrhlr.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163ugvbsuwe.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163ptgipqdk.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163ypacgwxt.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163dxxvjtmx.html

================================================================================
来源：http://www.aibaodan.cn/163fexexvoh.html

B. 流程控制
来源：http://www.xuanzx.com/163ytzljkxv.html

================================================================================
来源：http://www.aibaodan.cn/163eljvkvro.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163mqceqmoo.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163vzladnid.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163nkpduqxp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163htifkosg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163nfhruxno.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hxqzrswu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163dvuesxsn.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163wbezoewq.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mfykjlml.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163pkynmulc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163ccbqhaga.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163niiemcie.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163justnlia.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163auloocgz.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tpszgzjn.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163pkyiggum.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163bltnkrsm.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fcfnlaer.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163utpagwav.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163wbdwdjrz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ahyrmhxb.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163bbqcjtri.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163lamideic.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163kvssdgoa.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163xofpxkwp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163hcvxgree.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163bixevefo.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163rnmfeeet.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163kioseqal.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163kumlbvvv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163lzxlghdp.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163cucddxod.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163tuoqtfru.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163fohwlcqf.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163rqagwnph.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163vmwvfsuj.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ympvdibp.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163wkegcnbh.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163twvclhug.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163djbropjw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163tlohajqy.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163hgrhzsol.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163jgvulfrz.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163eeynvnyc.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163mtonoctk.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163zqwxbaxa.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163slvgdqih.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163smzhzfds.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ukccwkzr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163mivybspa.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163vshcthwu.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ldomndyw.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163iapqhfvt.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163yvfrnhar.html

[B07] while 循环
来源：http://www.aibaodan.cn/163xzxeuyoe.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ndmmcjfv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163rrydxjbs.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vphabwkq.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vnhmulea.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163eoufjqth.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163vvpxfeim.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163qanuvqcg.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rfqzpiio.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163gielysmd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163vrejbkhu.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163bcdnjfzn.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mevtgbrq.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163devllfvn.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lopwhnmo.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163jujzqikh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ygodnsmn.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xmdcagyo.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163sasksfsl.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163pedzacbx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163hhxhthvl.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qgorhepm.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lfszxhih.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163awqdqfvi.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163lsopyruh.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163buheljil.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163idjudffi.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163qxfqgjal.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163aedtkhog.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163hslyefym.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163bwhpwosb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163nnbojynv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163amwuxyct.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163zlbapqmz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163jtithbdt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163zhdzpvzs.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163jsgfxdni.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163mweakpjv.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163hkunnadm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163zsmuclia.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163rzhjqeez.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163tcskudkv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163nemsjgsz.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ydkantyk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163slaprnea.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163jelmqstm.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163facwbxrr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163qjesntua.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jkqfypyg.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163oqqplykw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tntwoyzo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163abarkzts.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163uhwfudvs.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163dfauxdfl.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163glzgcykv.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163bgvamzdm.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163nmfyihvv.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ftqjcrpk.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163pzazwvsu.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163mgajbpkm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163nzlfjlxd.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ttrrqvvg.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163knzvezos.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163fsllgznv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163fbyqrumw.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163fzfwdfln.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163xzqhbhqb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163aefqqall.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163zztdryii.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163hwubshgb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163bmjwujgz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163mjbpuabj.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163bngatjpa.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163kgqpltla.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ghqscwvb.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163eqkqkngn.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163xhfpcwtk.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163qikueabf.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163xirwjeyj.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163yctgsvwq.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163umdnexka.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163fowcyryk.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163ycjwqzci.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163yjovjgus.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163mqgindra.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163jfzhnmix.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163njysrjpb.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163tvxanqiu.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163xzmjivvu.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163kjugrzqq.html

================================================================================
来源：http://www.aibaodan.cn/163bnzokyox.html

C. 函数与作用域
来源：http://www.xuanzx.com/163kkjiewqb.html

================================================================================
来源：http://www.sxryk.cn/163tcuuatbs.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163slarwslg.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163lddczsrz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163rsivdxws.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ojljxrgf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163jezleyah.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nvvbbjxx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163oxtaglln.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163chfhrqmb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tpsasmxb.html

[C02] 默认参数
来源：http://www.sxryk.cn/163wzfdmxvy.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163grxpgpqv.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163cdadqxte.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163cixczwbz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163lvgyrnxb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163adkwuoqf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163uldutzcj.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163gxleeilh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163wtjzrkmi.html

[C03] 可变参数
来源：http://www.xuanzx.com/163zemjqrvv.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163tcafavvk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163qkisnfxx.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ddmrjaoz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163oypndatc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163jbsrqmjb.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163kunvbpmu.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163fglilhpd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163icwmdjxn.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163lteqnhdi.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163inevkiqn.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163eiuqjmck.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163dtdqfesf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163sbjgpirj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163bwltajhm.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163fekmugfo.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cunlxoqa.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163uxbmwumu.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ffdeehbm.html

Py:   return a, b
来源：http://www.sxryk.cn/163aockmymt.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163rwvafxaw.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163ojjxncnw.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163pmscxrct.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163secxmedm.html

Go:   return a, b
来源：http://www.xuanzx.com/163lboiixwr.html

Ruby: return a, b
来源：http://www.sxryk.cn/163iqbcpije.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163btgjretl.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163iajejfwn.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163sjekbzeu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163xufeppsa.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163zmkvbjsp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163vqzsajox.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163fvcnsjzo.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163wdvueknc.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ugtyslaj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163zpoqtkeb.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163znutkukj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163qaxvcmkx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163akbrfhsk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163pzvhslzl.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163uluuumyc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163mafalbwp.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163xcullgme.html


<!-- 参考信息 -->