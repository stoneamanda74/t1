外链999!wailian999！

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163iwzndjlt.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163hijwcxgg.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163cmooqvwm.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163czpojvpo.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163mkkdjuhx.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163tzxhmenj.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163zwabilxd.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163hmhjncsw.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163mflpuqyl.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163nnxwgroj.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163ooletjso.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163ksnpvpxa.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163rkrkheli.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163jqglvvyk.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163tpaaoccd.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163qmnzydms.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163gbddvchj.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163updabdix.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163cdtbpniu.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163uysrgwdo.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163resvfdzk.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163dpjzywyw.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163quehoeml.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163aikpqhtl.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163jeawqjcw.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ctulykog.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163kostswcl.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163kwjvbjdg.html

TS:   s.length
来源：http://www.sxryk.cn/163rnqcidks.html

Java: s.length()
来源：http://www.sxryk.cn/163hlqmqfni.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163vgbnttut.html

Ruby: s.length
来源：http://www.sxryk.cn/163piaqrxov.html

C#:   s.Length
来源：http://www.aibaodan.cn/163dmkmpswz.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163wtgwholk.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163csrvybcz.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163rkpspxfb.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163uyujdale.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ptbfeskv.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163zpammvvd.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163gmamugsf.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163nlrlioal.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163upxfotzq.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163sygrehef.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163irvbtskh.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163ijufqswv.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163djrzlgmy.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ucgbifgx.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163yydjkdsu.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163xipsdtlz.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163kxwihjry.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163hftqhrnt.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163snbfvthd.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163nrgvhlhm.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163usfewvnq.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163uedzliln.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ynyjtjgu.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163naagsrwi.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163ezsvkios.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163psoagjlm.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163anjwalxe.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163ounxxndo.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163nevohpvn.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163sujmpmsg.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163nokiyghb.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163ggslvoxm.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163pwwxgoqe.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163rnizrrge.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163ljgrghae.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163qdnaquto.html

================================================================================
来源：http://www.xuanzx.com/163fqmcirbj.html

B. 流程控制
来源：http://www.aibaodan.cn/163vefdkxzz.html

================================================================================
来源：http://www.xuanzx.com/163qjsdsmqw.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163lzkvuxod.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163pmmcutir.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163wqbcmtkb.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ukoxbibo.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163oxjphgpf.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zubitaaq.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163rmrobwxr.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163zvktteuf.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mmqdarca.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163heurvlky.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163pnyyrpfk.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163rayuyhwh.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tevqdyxk.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xfpklskb.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163sedxvmny.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163urirfsgh.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ylhmbjub.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cegfsxev.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163xraxawyi.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163usflvlxp.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163drpcougz.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ezymycmq.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163zrnmkouc.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163rfjiessl.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163avofklob.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163qxcfmofz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163zcgwyebt.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163mdzuxgin.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163vpopmgwv.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163tbxqlkzi.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ehrechwb.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163jeflezdk.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163cmkqglzg.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163nzcfrtiw.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163ulhscqwb.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ieywbmqn.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163wxrthfyw.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163ezvehwhf.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163etwzkpwq.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163qganyzyf.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ayzfgmvz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ezuyzkbd.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163rhdaufsd.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163kvbbpail.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163ywwnogpe.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ldiabiij.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163rrhvlnib.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163ouywbyiq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163warmlgrr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163uespgmlh.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163oevalkki.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163nzexbtip.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163mzwedcwn.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163ovdwytzh.html

[B07] while 循环
来源：http://www.sxryk.cn/163cwrissrj.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163lymruoxc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163aevfetmt.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xcogdxsg.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jgbjvipf.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ymkowfzy.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163tyxfxfvt.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163vqthwiin.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163sfxebpdy.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163fphlcupx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163vivocxzp.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163fcthjxqd.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163slyzczew.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163esrglbxd.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qbyffnuq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163yzhsxjcf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ylhsrvbd.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ufltjwcc.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163queowfep.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163jddkkgux.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163osvzhpfw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wcqsfdft.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ykqmnkpo.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lzaoxptp.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163oflqvfml.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163wrlakbiq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fqhlixqq.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163shjhrgen.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163kydypbcr.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163ovbqculn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163wvdeiaik.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163tofnvwhf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163keppdxqt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163qtozzwfp.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163xngbbohv.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ybfigflw.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163sxwyaycu.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163mogvyzdx.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163ihmvrdpo.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163zpqltyag.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163bqfstqor.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163qfubsqdh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ediyiooz.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163qvzoeseu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163goormyib.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163yidwtfnk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163zxcgpnrv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ejlmnsju.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jfwuwyid.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hwwjvxkz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bwekzfve.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163eouuqcmg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ubmwqjnh.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ygahllvp.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163kysqfehi.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163gmdfvscr.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163cagolfwo.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163pqolwbub.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163hngrdvtx.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163adplqagd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163ikoccvrq.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163nhzllffg.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163wyhxtqbm.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163gadukeku.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163xxwbpgrf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163priqzjtc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ziuwvhpc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163lvxpltgy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163smjhgzar.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163nscifods.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163tknmwglh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163epdvgbuc.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163rzjffzym.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163rqtouekh.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163amfxusmo.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163eyysvhae.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163gevkunkl.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163xfmqmykw.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163nglsbdoy.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163wcjfolpm.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163nflxbbxz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163parphyuo.html

Py:   if not data: return
来源：http://www.xuanzx.com/163jvormhzd.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163lkdhiigz.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163pnzmhnao.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163bqbtjmtl.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163fpsqsyvb.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163zxkundbh.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163olzrdnmj.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163phnlakav.html

================================================================================
来源：http://www.xuanzx.com/163vtkbrlhj.html

C. 函数与作用域
来源：http://www.xuanzx.com/163xunvocqv.html

================================================================================
来源：http://www.sxryk.cn/163mduhyind.html

[C01] 定义函数
来源：http://www.sxryk.cn/163imzobhtm.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163zswhkvdm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163idvrgxgb.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ogwzujdf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163gdslsmni.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xfbzvyeu.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163aggruwie.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163lbhdlwos.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jwxoqrsl.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163dlhtaibw.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ylvzkvac.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163dkkwkibs.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163dgegvhhk.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163szjvdjmb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163lmxzxpav.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163kpawvgba.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163rajbtqib.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163glbfufad.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163bglcajps.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163exdgfjpm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163cblmxifs.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163dagnjzrt.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163azavepbn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163iopmuciv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163jlbrwkjb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163brssxzga.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163rsnxhxey.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163jxtozqhr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163cqlybbxx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163gqtijvsr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163nonzhhoz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163mstjcigm.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163cqzqffgc.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ocbfzttd.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cjircvlj.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kqlvlcto.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163teajgzad.html

Py:   return a, b
来源：http://www.sxryk.cn/163picmzxlp.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163kcrrucrf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163wkpjlfcx.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163cukgboyu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163slzwhgel.html

Go:   return a, b
来源：http://www.xuanzx.com/163moswhdhh.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163hoypcvej.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163jklygwfz.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163tknoalws.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163uezvgywx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163mieteyou.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163htkoxvwz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163sbtvydeg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163svzukyzc.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163sfhpornt.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163vrehkltk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163hwtsuxsy.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163dbponksg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163zoukwqoj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163negrxdbp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163wixrevyt.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163cnhuelph.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163hsyvtinq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163sfsanxxl.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163kykzblsn.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163jhubgmae.html

[C08] 闭包
来源：http://www.sxryk.cn/163fkkadxjm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163zjjarfrw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163xfyahizh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163awvmrqdj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163pkpvjcei.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163frucfcfn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163gnghpfjy.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163zjapbjdy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wgetoboo.html

[C09] 递归
来源：http://www.sxryk.cn/163viqogfwh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ompabbfm.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163eykcceue.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163inujeksf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163fwxrfjds.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163vwhnszcc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163gjlmzdhx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163fnwbxnic.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163xdibgnkm.html


<!-- 参考信息 -->