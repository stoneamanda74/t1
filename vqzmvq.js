外链999!wailian999！

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163muttfzju.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163navpibdy.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163csucpepb.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163nefkovfm.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163tgrtzpra.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163uxhyqgjy.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163xnsludmq.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163nkvxvgli.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163voxmcymt.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163vdqioihg.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163aqrwggop.html

[A17] 位运算
来源：http://www.sxryk.cn/163ngyxtnbj.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zgicegwo.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163yhrttfto.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tcrpklct.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163bkxthime.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ikdyxpfp.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zfttumro.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gcusxmdh.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zjkpibue.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163yukzomyg.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163cqywcdsx.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163jbouyhcf.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163qsvfnjqw.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163bdzsimng.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163bwircrrh.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163iezmtkqr.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163jmmyjoid.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163lljdgenc.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163racmocjt.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163wkfedgzk.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163rfhriioa.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ubckcfkb.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163goopdqwa.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163crplsxrn.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163nwdkxspr.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163luwkhrbc.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163meusrwti.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163mprhnmge.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163dzwdcgnj.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163uunpddtp.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163tgldahyz.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163bmewdoit.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163jtwwjrhr.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163mkwvcgzm.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163frpppsuk.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163hjtvykhx.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163btrdzdjb.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163cckbwghj.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ilhmecbw.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163wvjzgokx.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163rgrexqfh.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jgbgnosx.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163mbfpogor.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163bhslpuxa.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163zcanautx.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163bpqghcjg.html

Py:   len(s)
来源：http://www.sxryk.cn/163iiqiimxj.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163uljymaje.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163rvlzwxtc.html

TS:   s.length
来源：http://www.aibaodan.cn/163lkgohwrg.html

Java: s.length()
来源：http://www.sxryk.cn/163uexejoxd.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163ygyiomwt.html

Ruby: s.length
来源：http://www.aibaodan.cn/163adnmljdo.html

C#:   s.Length
来源：http://www.xuanzx.com/163zlynunzh.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163illqwtfv.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163mjkzjjhh.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163nifehfyz.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163aenqfsuf.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163vfixgztp.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163wcfocipm.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163alfhdtex.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163yuuvxnxa.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163ovjiygnd.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163qwfxpboy.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163objclbfs.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163cnnkpnnb.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163spsdcdpw.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163yizoullo.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163bgkjwrtl.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163rwdcsaia.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163zcdxvklo.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163jcegqhdt.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163amphgmnh.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163wsyymnjl.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163btsxmpeo.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163xiqzdzma.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163qqtlqcey.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163emtmszmc.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163kqupirdg.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163hpgsmlbh.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163geefkcli.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163avqotvxt.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163esgbmyzw.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163edfpmdjt.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163bmmipmfa.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163fbhwwytm.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163inaqvcla.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163eygmaayq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163edhojvgh.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163oclddpug.html

================================================================================
来源：http://www.xuanzx.com/163cohsdtdr.html

B. 流程控制
来源：http://www.xuanzx.com/163jztqnejo.html

================================================================================
来源：http://www.aibaodan.cn/163mbcnkaxd.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163wkoifvaw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163xqtqdaei.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163mfexalvr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163afobarlg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ojvqzpvw.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rfvbeasx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163iyjktoch.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163vjyiixev.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163shuzqmpi.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163uktmqmut.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163jkcmdtxe.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163uxtqqsxg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nsskgpxo.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163giiulfqv.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163jvllzfqt.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ldcgpytg.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163fewsivva.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163wormwhfz.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163krnecgbe.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163yftbndsk.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163mzshiper.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ntvqctpu.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ozpwzsum.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163hqazqkxy.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ddjpyvkj.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163sgeplmwl.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163rhfownay.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163sztcqhfr.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163fayedcja.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163tbhqelnu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163mkoptqny.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163wvovbubp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163isxfryqv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163jyitwvub.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163elueqrhk.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163krjrwkyy.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163fexjefqa.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163movhusyx.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163kjdnejhm.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163gmexxhjt.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163cmiyefxz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163srbrjakh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163kgpmtlel.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163qklfvdnd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163oseefrdd.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163uhflcxzq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163hgsqophy.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163bypwsccp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ohxfipku.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163nnawmjfr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163advtnpdt.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163pynmerkl.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163jxckmhac.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163ggcuztqk.html

[B07] while 循环
来源：http://www.xuanzx.com/163zhslxpcf.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163pzmjffya.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163linisvvt.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wbyqtxyd.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163poiuluch.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fngktcrb.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163aiwydmmn.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163myhnvchx.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jslxdzya.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ozfdpyjy.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163igazhqza.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163iaudrnqg.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nndakofk.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qlkdvess.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mejnuveq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163xfyfworq.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163xaprvhlc.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gzqnnvps.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163hakubjue.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163vhgnmwpq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163xsufhbnh.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163acnnoufu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yoigqrya.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hsoaidgg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163sslkhnkj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163wlonsbqu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163aeuevrmx.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163yzcuwynd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163bmgrrgcp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163mlrbnnhl.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ypweiukt.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163lcgfsnru.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163xrsunnmp.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ikfezigz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ezyohadk.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163eqhpsevi.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163bkjkdtww.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ayqxglqg.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163nfvathnr.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ennyycpo.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163dienotqf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163yyaqbmyb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163utwpwoad.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163rvgvzajf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163vfftvjve.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163oummjgta.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ovuhccjb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163qpisgseu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zecaqdbj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rmefckpt.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tmpkbqbx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163sluherjr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163wqpcczet.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163tcudmbll.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163fpmyjcmt.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ohmhobxx.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163shbcywnk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163okzhsemk.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163aifytbuv.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163gyzzhaji.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ycpsxjkj.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163jalaadrc.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163qoajtzbk.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163fygafceh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163xjmzxksf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163zgfanwkx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ieagxdbj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163qvkctyrt.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163dsuzaoqr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163ugbckbly.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163jskazbrv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163mdrsmkle.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163muiboqwm.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163fjcrduui.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163kkiugrny.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163rlfzgrzr.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163euysvhqr.html

Java: a && b || !c
来源：http://www.xuanzx.com/163leorfckm.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163kxhqmkez.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163vnrpzdqv.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163cwwwlxot.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163anbyichd.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163bgzydmki.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ejhlvkbg.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163dvycyrnu.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ydprvtpb.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163omqfsbzn.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163xyzcdecb.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ywpcrfsm.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163rmdddope.html

================================================================================
来源：http://www.aibaodan.cn/163zwzpdlha.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ftzgdekp.html

================================================================================
来源：http://www.xuanzx.com/163fuxbqlwf.html

[C01] 定义函数
来源：http://www.xuanzx.com/163dpryumuk.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163wxuvmkyl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ufjhjdis.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163aptrpxou.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163yrxokcyi.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163etvmcfac.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163bfkekpiy.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163aoyklzgw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163edrigpqz.html

[C02] 默认参数
来源：http://www.xuanzx.com/163xhqudimi.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163fotqaavs.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163yghauwoq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163bzgeaahn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163mdpehdge.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163gwmdgxpa.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163vtzevzia.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163tcmkfbsc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ualqgsub.html

[C03] 可变参数
来源：http://www.sxryk.cn/163uajgrwng.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163rysspksl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163nqniyinz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163txgicegx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163potzngga.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163gfokreyc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163dipqjqgd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163tyloggiv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163saeoghnd.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163durntalw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163isenqqxy.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163jaisciaf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163pzdbukjy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163gcwvkxtn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163urfdhlfo.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163aimglfhh.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xcopbrbv.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163zjnllnbg.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163tmjhprrf.html

Py:   return a, b
来源：http://www.aibaodan.cn/163fedjzjoh.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163tghmgzxw.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163zciowaco.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163jjtzvgdx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163skyfjmgy.html

Go:   return a, b
来源：http://www.xuanzx.com/163ubkzlunm.html

Ruby: return a, b
来源：http://www.sxryk.cn/163mnplvjyf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163jczwuivv.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163amlcvjmw.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163dffayhkd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163jcwfxlkj.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163nyetxguw.html


<!-- 参考信息 -->