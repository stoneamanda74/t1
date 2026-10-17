外链999!wailian999！

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163hqdxwttm.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163uskdyemn.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163bimhmiod.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163pbgroziv.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163ilyauycp.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163gpycqbyz.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163lkfltfvq.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163eflgcfel.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163kqmjyrea.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163xhqbtwdn.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163zmylsjts.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163qmdhpgkc.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163xuijglse.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163gxkmaisg.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163dmqeptor.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163dhrbcmdd.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163pfavlbst.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163dxcmdjub.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163bgcjcbbl.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163izyyzmem.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vhqkradi.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jbspkgsq.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163bsxhpjrs.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163jocmsncn.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163dloloozz.html

Py:   len(s)
来源：http://www.aibaodan.cn/163zndadtpo.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163uhojvkrd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163thsxholb.html

TS:   s.length
来源：http://www.xuanzx.com/163rgkjtjuy.html

Java: s.length()
来源：http://www.aibaodan.cn/163lbnypeix.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163wtcfvguu.html

Ruby: s.length
来源：http://www.sxryk.cn/163ilzjshol.html

C#:   s.Length
来源：http://www.xuanzx.com/163vmxrsjng.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163eelimcbf.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163qykkekxg.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163tbaghsyw.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163oxrshdtd.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163sleetxvr.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ntqazdoc.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ovzbxjcj.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163fogiabrl.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163qsbgapvw.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163tfyjdpce.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163yvphawle.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163pibvjkfy.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163tiqlgqtd.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163mbscwmwe.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163oulzbsri.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163whjwpxjn.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163mpsblyzp.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163edvwkxyq.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163wlsmncua.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163cmqhownv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163arlexivv.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163urlnyojx.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163bhenfzvb.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163wmprdfad.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163fjuwscvz.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163jprdsftl.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163rkxarmte.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163jresdkck.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163vjvxnjvb.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163fffxtnzy.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163ffrdktzd.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ktuiturt.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163lnfdzeon.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163kqgxwdfm.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163bzcrzebi.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163jzffryql.html

================================================================================
来源：http://www.sxryk.cn/163rsfqlezh.html

B. 流程控制
来源：http://www.sxryk.cn/163tlmnzdgz.html

================================================================================
来源：http://www.xuanzx.com/163lgsflpwr.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163qzrexqhs.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163yphkggii.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163rzqczcwm.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xfbuphyq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ckqrxlvg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yofvfurj.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163rrebsefn.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163qxfigyfe.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163lxltanbo.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163wiqklwez.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163jdesexyh.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163eakwsnbm.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tmiivawn.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zxmekpka.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163igflewcn.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163qgsphwzz.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163sjvdonrt.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163dqmqcctt.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163rdbfszhm.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163bxrrbcik.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163cwrriqya.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163prhsjziy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163eagssyah.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163oaptsndk.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163pbkzzyoj.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163jgqvruux.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163zhqjzrkn.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163cozejleh.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163xxaqorgg.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163dxqtzabd.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163xfowxonx.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163byvzlqhm.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163imyxaqec.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163cavdlilb.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163exuyeyqd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163edsqbvmq.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163pqwpszea.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163rgskfbao.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163tbyecscf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163xulmquwr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163sgqmanlx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163gcfihudu.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163mzaigaou.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163ubbdyuhw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163aimijppy.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163fdpbanzu.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163eogioctm.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163wquqllim.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163rkgydgbx.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ezvuvojw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163hmzcqvuq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163wyognbee.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ihzzyzfd.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163uttgvuxx.html

[B07] while 循环
来源：http://www.xuanzx.com/163zipqpnly.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ebybcbxs.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ngmdemmi.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163iywmbkhd.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163wmxrvjio.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xeampgid.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163xrpswrob.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163cusmmxqv.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pnsdhvet.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163rbyyfvqw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163bjdzkylw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163vdeagtcb.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jjfrwwdm.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ynjwgelm.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jsmjkuxw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163crgewqjx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ucdlcjfm.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bbgdmjwf.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163jqbvckyd.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163czznmknn.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163nivcaylx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ysxbmfqi.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163uxpmyhti.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pqkvcnhl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163fnnjdbxe.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163iravwkbq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lbtwiwrc.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163kwrxmmzn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163ahvgzkvk.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163irecqgls.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163wkcgarsl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163mzjtmcwr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163wqapkoxv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163ywbjiqzs.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163fldzautw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163yipvmdtt.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163btryzzsz.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163oaehrzdu.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163drbkswtm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163xizssiva.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163niyiakjg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163qtloaghg.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163jjjddhzt.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163gszxsfis.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163vdrlqpni.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163xncqbcmd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163exmolvuo.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163uaxzejmo.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ijsinqme.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ehkaqpwo.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ydmafhvl.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163yovnxduy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163jvlttyst.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163oeptauir.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163jnjttyyr.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163imklrwyz.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163tvdhuqyz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163tstnbcdh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163bgdsnhay.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163gexscozt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163plqlfvqa.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163flcrdknv.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163olyueaap.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163hfbswcba.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163holbemhi.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163foyuvvuq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163owzltyke.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163fgqyhcmc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163xagenlgw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163tnfdmmic.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163zrfqvqhq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163vegrofmv.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163jdcpqdrs.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163sjoweldh.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163nbianidt.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163fkpcnjpa.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163cybngjtv.html

Java: a && b || !c
来源：http://www.sxryk.cn/163rffgyher.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163rgsgpqdl.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163lhwbnhua.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163tlivsuvq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163zvqpowoe.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163ywccykzh.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163eaipqjta.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163rfnchnbm.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163qoexyvxw.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ycwdhgqc.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ulleswhp.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163veezkquk.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ojceqcua.html

================================================================================
来源：http://www.xuanzx.com/163jxgvpwlz.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ldtghvrk.html

================================================================================
来源：http://www.sxryk.cn/163aumyajwy.html

[C01] 定义函数
来源：http://www.xuanzx.com/163nkxrqjbs.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163jdunvfvu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jkspfcru.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163jmqwkvzm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ryxpnpum.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vgofaros.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163wgmvitsy.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163teiljkcl.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gnmlvgbj.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163hiieretc.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163antanaka.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163yomnvnrx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163zuwjgpyl.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ykautxxv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ycstehvk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163gcvssimb.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163eeyzlxqz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163pbnytheo.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163bhunrkfs.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163qhivomdg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163jyahnxpf.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163mmltqyxx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163xkrcznpg.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163hsxvqbwh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163baizsehx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163arhzjszj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163sfybafpr.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ibkertki.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163updflmjp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163qjldnogc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163dujidahh.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163zpjzcmxx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163dvdgxuqd.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163opdbnggf.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bidxfozr.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163oavwhkyk.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163qckstehs.html

Py:   return a, b
来源：http://www.aibaodan.cn/163oelhgems.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163mafbsggq.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163nyaqeuyq.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163suthvvcp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163zuywhtsu.html

Go:   return a, b
来源：http://www.aibaodan.cn/163aubdawzh.html

Ruby: return a, b
来源：http://www.xuanzx.com/163frwfnbgo.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163xincsoyf.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163dnovwnpb.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163wwnvheqo.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163bxiwsvzp.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163pcqhuegq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163azpgpowl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163mokfndzp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163nbfrltjs.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163azxvjcup.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163fpifpaat.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163glaisrma.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163qqlixrze.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ozefyqmc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163vzjzltkb.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ispphfur.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163idnfwlfx.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163nsezoeuc.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163qmwvzhbo.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163xkvcqexb.html

[C08] 闭包
来源：http://www.sxryk.cn/163acrhfliw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163szmszdnk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163iwpioagw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163fmsjmogs.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163iyqefbjs.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ufouxfhs.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ryxapchk.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163sxwyhegm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gazqowba.html

[C09] 递归
来源：http://www.aibaodan.cn/163yvkawiuy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163dxkodvoq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163knpjrfwx.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163uhyyuuiw.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163eqiqwzeu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163zqaxkvwh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ulguqzpx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163fdwrawvj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163vexbgcli.html


<!-- 参考信息 -->