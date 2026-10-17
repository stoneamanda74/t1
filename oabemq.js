外链999!wailian999！

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163uxkzwqyw.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163hwsxjxom.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163oltxvpco.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163kjxtdckf.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163vdkyrnub.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163tzhjjtbx.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163qvajtnyg.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163hqtjnzap.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163atrnalfv.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163gyktohbx.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163osnupyrw.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163vixfiyog.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163ersptius.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163jyzgfmuz.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163kefujybq.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163hhnxlatx.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163bhyfmnct.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163xhnztjhp.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163avagrdov.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163excrdhtw.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163blzhpzgv.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163bnqksses.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163ghfrzmed.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163qkhmkkdm.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163qbnqbldr.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ubmpgekz.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163tyobrzef.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163josezxfl.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163eyxuygee.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163icrkrqvv.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ycpnpern.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163yptjypal.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163nehkjtlv.html

Py:   len(s)
来源：http://www.xuanzx.com/163rnoeysma.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163oweetzxd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163mdxyvslb.html

TS:   s.length
来源：http://www.sxryk.cn/163latccocf.html

Java: s.length()
来源：http://www.sxryk.cn/163atewxmqq.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163ctbsfclv.html

Ruby: s.length
来源：http://www.sxryk.cn/163tyyqxcwe.html

C#:   s.Length
来源：http://www.aibaodan.cn/163ijpoadlb.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163pdniehpo.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163pytntsal.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163mwxinrgq.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163vwwigpjx.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163zmwodjgx.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163foeltrqy.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163eudawqjk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163ubwmjihu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163vcgwvhin.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163byualrqm.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163malrrhvk.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163hqpakvqi.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163cvkkwtny.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ibqgtzrc.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163kevzulik.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163yzjxqmhl.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163jzvhgblk.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163eocjxpkm.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163gtsiwebv.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163xveywuue.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163uvhklalr.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163dujwroty.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163rsrgvcej.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163repauldr.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163jhnjzxah.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163xkvtuccg.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ytvvucpp.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163ylischjj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163kumnwlye.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163ducerqdu.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163qdaetsls.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163fegpozwa.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163swuepmnj.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163wfmemuio.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163lmqopmqp.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163rpegfzjo.html

================================================================================
来源：http://www.aibaodan.cn/163saptrsqc.html

B. 流程控制
来源：http://www.aibaodan.cn/163pnqtayrh.html

================================================================================
来源：http://www.aibaodan.cn/163yxdzwlak.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163vaixdlch.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163tqvbfury.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163thoaxhiz.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163osrffxxu.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163oeocbadj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163umwxfudr.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163xhtznbgd.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163iwasxilp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xipseeit.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163wzhwgdbs.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163gatycfhi.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ixfnflci.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ohusrvem.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163srynlugm.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163kcnxnlwb.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163tvekoite.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163iytbljtq.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rdhfjkyu.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163fklnldsw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163cfmnxzin.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163ozeveibh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163jlbhkhoq.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163zhvbdmaa.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163vljejskg.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163ekuybmjo.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163xwtrgbyg.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163jxhjoyte.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163luzpiakb.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163jcyqvjqk.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163geoqdlni.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163nxkeawrw.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163szqpdcmx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163fqddlahi.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163gobrzrme.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163jipxzups.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163nhdcxirb.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163itxtdixd.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163djehpjty.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163dcnkdrxu.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163phxjliiz.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ewspiilm.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163nzkhetwm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163rdvimtal.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163uxacdpjb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163dcdmlxqx.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163jurzvrak.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163uguymmnt.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163yyxbqixn.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163zptyoswv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nzrqtjqj.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163hypqcdyj.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163hipfxcbt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163buroggye.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163hutialdf.html

[B07] while 循环
来源：http://www.sxryk.cn/163uzqfmrxt.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163mrxsicwv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163gzchilto.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vpumajqy.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ebicmwau.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nciwehes.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163lfodbrlj.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163ytckioew.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163btnykeak.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163arjwipoj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163abbrniwd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163bstdslpy.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163byqjqqpf.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wavmvjlp.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qjmrgqmh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163uzlyaied.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ckcmrgyx.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nfqftttb.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163llrfxttd.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163iqgrlyqd.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163fjbohwbb.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163abyfhqlm.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163djleeezb.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163noinjszj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163lxlwnjmo.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163pxsqnzjo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ufnikdzk.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163rjcjewnj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163fdvdcpyq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163corptdxj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163woceabxi.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163qunuizhg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ssbyvdbc.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163lwlrxhwc.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163roohwwlk.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163txdonlqq.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163hqytkgfg.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163esrzydkv.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163baqluhrv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163vynghmiu.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163wloanyqf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163ffcfepwy.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163eeyrsehh.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163glytccmd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163jkkifrua.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163sojwokof.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163kpgxrvot.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163sniejjsw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jsyjdarc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hjqmmacm.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jisixowy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163tmdotayv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163xqgwhjka.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163dwmeykpp.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163jdfpdpkw.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163zzuhsouy.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163iyqqvcxz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vmadifel.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163gkrggdgf.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163echpptho.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163pwfmiuoa.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ejbntxmz.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163xwmdaamg.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163fzcmuchs.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ffnzlcrj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163tppueyli.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163pfpbhbhm.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163gkonsvfm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163pdtmpqvp.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163qlzwsvxm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163mieggysl.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ubdjtszp.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163etopzhxg.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163nvrqkend.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163eoavxbdx.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ihwzbgve.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163xyuhubkm.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163yfmxpuha.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163uifwsioa.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163qcxtscwu.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163zxayzlie.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163zlcbgioz.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163jusfrpwi.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163yqgpepmg.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163zlbgqhwh.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163lqssulmi.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163zhxicmcx.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163cyyirqoi.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163itjjgpcx.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ncuxamth.html

================================================================================
来源：http://www.xuanzx.com/163ytqzqtjp.html

C. 函数与作用域
来源：http://www.sxryk.cn/163duepkfop.html

================================================================================
来源：http://www.aibaodan.cn/163rhskunvy.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163fdhsqgge.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163hiagqdoi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163jhpactsy.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163stiqwcpb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ezfsvbam.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163cbaddbln.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163zrhdymus.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163esvdhlkg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kaawlois.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ryovfdmg.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163huimzpeo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ylgraqik.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163gkgquran.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163zyypmoby.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ydriepik.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163llewumoz.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163zlwzhilt.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163gudpfbbt.html

[C03] 可变参数
来源：http://www.sxryk.cn/163fykcrvrn.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163vgssggbk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163wbuyxjxf.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xftkwbzb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163eghcqtby.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163qfdrgmjl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163gxghmumf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163nnhkselv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163rdovpcpl.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163rfuabytl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163bhougkgo.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163hkilzuwl.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163kriuwkdq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163lamtbcdt.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163kwwwqmgc.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163jfglifud.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163shafgbds.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tzgkykrq.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163ocpiyqrk.html

Py:   return a, b
来源：http://www.aibaodan.cn/163lzhpijby.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163lyssxoka.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163kaglkorx.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163plnfgtct.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163wxsszqod.html

Go:   return a, b
来源：http://www.sxryk.cn/163sxxiixdj.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ixdiacqy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163dxilgade.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163oklumadr.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163yzuhdaif.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163lvqzrxsx.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163hazmswew.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163menayghc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163nqukfwnu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163lqybzscb.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163acyknsbt.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ikmfhjco.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163dubxentj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163grtbwxnx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163fpkbehbk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163meguqrht.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163botqtryk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163msfzbzel.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163qenzhyhr.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163gtcbnwgj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163nnvztwfd.html

[C08] 闭包
来源：http://www.aibaodan.cn/163dcdxjceo.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163kdbdagto.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163heafgjuu.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kigxgkot.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hvbjrrbt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163kbltzkaz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163boyhkoxh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163dqczqkfz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163avrwabbw.html

[C09] 递归
来源：http://www.aibaodan.cn/163gwduiila.html


<!-- 参考信息 -->