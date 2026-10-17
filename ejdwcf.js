外链999!wailian999！

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163owvnhmtm.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163txplbpjg.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163oinoqwuo.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163nqfiuyrf.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163kjvpqfqa.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163chyfcfbw.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163acicpnld.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163espxdcdt.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163aplgsnpi.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163vwlixnzq.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163rhjvalbh.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163jllypddo.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163okaumphj.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163rzvbdojo.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163pqlbjsgp.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163whzeinzz.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163uweblpyx.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163zbnzuiqw.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163cmbpsbsk.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163jprdzmxr.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163hmzzlfxh.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qdmhdsup.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163azmzdyte.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163zdbddoas.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163jbeovdki.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163qjwbvyes.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163gyqettxk.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163xfyxiifv.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163itqkebqk.html

Py:   len(s)
来源：http://www.aibaodan.cn/163dhrmlqjq.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163mqlkssas.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163poxlcxbz.html

TS:   s.length
来源：http://www.sxryk.cn/163nxelbstn.html

Java: s.length()
来源：http://www.sxryk.cn/163ltsohyam.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163wjmptcxh.html

Ruby: s.length
来源：http://www.aibaodan.cn/163dtcrqepi.html

C#:   s.Length
来源：http://www.sxryk.cn/163znlwjemy.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163drzhhwdu.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163thizzqkx.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163dmsipoin.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163nhdfezag.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163iklyvxex.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rreltcvd.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163svjtbzwg.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163tsyfydjd.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163lrsdmevz.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163axnwxxxy.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163uuvfutpm.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163etrjjpri.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163tlfoxzwt.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163hceqfkwe.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163dtfmgcqp.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163wflrdhjm.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163gyqhqhjt.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163itgovuyq.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163nejmegwt.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163ryvzjhmp.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163nndhpwqb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ywxvkqbs.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163bimuhyvy.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ytctveni.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163adqpqwrq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163kukjkxzj.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163jsvibgfj.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163hoolmdon.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163vvafaodb.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163teyjouua.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163nagzvhyt.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163qvfjuwky.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163uzfjlpzh.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163eksitccp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163grerupzk.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163sdrpizqk.html

================================================================================
来源：http://www.sxryk.cn/163luchylje.html

B. 流程控制
来源：http://www.aibaodan.cn/163zkinvjtv.html

================================================================================
来源：http://www.xuanzx.com/163etxcinra.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163lsxhygqu.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163qyniyiog.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163klzaoxos.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163eaeuvcjz.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jhpdklte.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163cdmwixtf.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163nithhbwc.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163uvwhvozi.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163dimshovx.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163umekqnta.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163cynlmyuh.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163qjrnkcvn.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vcbepvpk.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bmunfsxn.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163jlmbqwdm.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163isvasupj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163yxteolld.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ysvblkdq.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163qcaoblaq.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163vxxzxbjm.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163shsjzecq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163uimrsqkv.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163vmsrspcz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163wmklvyel.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163gosiipbu.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163fjvofiba.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163ktdmttks.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163sinznqkd.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163skabnbnl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163nwcixypd.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163wgmaboaq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163okqsdmth.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163bzkiyxsy.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163fxfuhibf.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163qaijjhcr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163jyjzalpx.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163yghjsmzf.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163qjifowcg.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163pmajlodd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163iwjdxeep.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163rsmxpguz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163tpcsrcqi.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163xbxamccz.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163hthudaeb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163ehdikufs.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163ufkufozp.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163kowzzben.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163lsniobcp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zbicpwii.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ytcdlmrf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163vkvcopek.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163mynpkjuz.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163anpiudds.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163fqrpduhv.html

[B07] while 循环
来源：http://www.sxryk.cn/163mznienyg.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163eprxxeeo.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163uxwfddmb.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zpylxpgf.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wfpvhkcy.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fhnddwch.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163fugloypo.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163ztrnddko.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163atbdlrrj.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163modsjjod.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163qsgnmurx.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163azxqhljq.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jducgega.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lkwhlatm.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mcoqurjc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163payunipk.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163mgjbhlib.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163csxuppaq.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163pdszmhma.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163snvrisxl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163xtpwolfc.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jjerresu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163uesarwir.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163weydqvyp.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163qkzhpxil.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163xlkrdinm.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pzwycthj.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163lhtknolt.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163etdlcksi.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163zyqdgaqr.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ritnulml.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163rxnawcfm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163kddirrcq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163moqdlrlg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163uvwbffuo.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163avfuidiv.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163stprmnfm.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ieqewnmq.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163cifetcrj.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163vcygufnp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163hqfjrape.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163vtadxzus.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163jvwsjulk.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163sgxzxkpl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ursxgqeu.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163jpejcaxi.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163zzackwso.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163heueeini.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163baoffmdk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qbkvlfie.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jfyegjru.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163nohhjgbm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163kaqgxfha.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163toirtejx.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163dgrqoree.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163nutyqsdx.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163ksqmtmmp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163lhjudeaa.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163juvihxhm.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163vzknkoya.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163umwhyynr.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163orvcmljr.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163lqnsdwlk.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163kllfamws.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163nohowvru.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163hmjvwtwx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163yomrgvio.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163saminmhw.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163lzilcoec.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163nrqpdsgy.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163biwbjuop.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163mysvxavv.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163rekqmlsq.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163aidofxjy.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163yxhtkjka.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163bpwaxrbk.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163dbororlm.html

Java: a && b || !c
来源：http://www.xuanzx.com/163xmwengln.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ffmoktbm.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163qpjbbfbr.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163rascvmss.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163kyydtuol.html

Py:   if not data: return
来源：http://www.sxryk.cn/163qfdssekp.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163olsvqlgu.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163wwtqrfuh.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163gdiobrkp.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163fkxdqrsn.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163iopmrrif.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163tqbfnkym.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163otudocpn.html

================================================================================
来源：http://www.sxryk.cn/163lnifbzsf.html

C. 函数与作用域
来源：http://www.xuanzx.com/163osbmcsty.html

================================================================================
来源：http://www.xuanzx.com/163knjnkapg.html

[C01] 定义函数
来源：http://www.xuanzx.com/163fduyjdwf.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163tixvqhzy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ahmokvvo.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163svyqbjoo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163lbbrmqio.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rfwywilg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163subxuhzj.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163dbfccfhm.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163opmsnbzc.html

[C02] 默认参数
来源：http://www.sxryk.cn/163acyygknm.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163gtdgkkoh.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163rgryqkrm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163szgsxqqw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163svlncgog.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163vsfaxrzw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163yxszymwd.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163iqkuhoqh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ihjvsqyp.html

[C03] 可变参数
来源：http://www.xuanzx.com/163zvtkyfna.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163prlaspbq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163fdgwhumd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163fsuxjxjv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163sggmetwg.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ofaklgsz.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163rnngxltw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163kqhskpgr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163dpvremkg.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163jpmmbibj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163kaylcica.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163kvkouwnq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163qkxesmre.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163dwymgrwz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163vpcwkuql.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ocuffvij.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163aywawjmi.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ggbawcwd.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163vvlawprr.html

Py:   return a, b
来源：http://www.aibaodan.cn/163xuiqyxvn.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163cmyzapsn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163zeldckub.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163beezsvnc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ssshqbpm.html

Go:   return a, b
来源：http://www.sxryk.cn/163vsdwmxlx.html

Ruby: return a, b
来源：http://www.xuanzx.com/163egtdkozl.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163peznrqgb.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163cmzcwjdk.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163wtylxepu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163xabyeuxj.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163pkfizkdn.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163imqfjkni.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163vpkhuotw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163rhdovkqb.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163cvjrrbpr.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163xzayjywt.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163muuwxodu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163xmxvnmog.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ztmwistl.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163mkrgqopk.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ylfawqly.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163tkaqjizc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163mtfjxfpf.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163nnpagznu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163nakbkjre.html

[C08] 闭包
来源：http://www.aibaodan.cn/163izrafgso.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163xwrrwilf.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163jjzyfxge.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rgnpbcyt.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xjzdcqch.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ciyxpszb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ycrruikw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163hlosuxza.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nuiizprf.html

[C09] 递归
来源：http://www.aibaodan.cn/163hyrgnlnj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163apbmdqoa.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163crnxvrjh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163nygxuhbu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wbdmrzsl.html


<!-- 参考信息 -->